require('dotenv').config();

const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    port = 3005; 

const controller = require('./controllers/Controller');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then( (db) => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    

    const db = app.get('db');
    const userData = profile._json;
    db.find_user([userData.identities[0].user_id]).then( user => {
        if (user[0]){
            return done(null, user[0].id);
        } else {
            db.create_user([
                userData.given_name,
                userData.family_name,
                userData.identities[0].user_id
            ]).then( user => {
                return done(null, user[0].id)
            })
        }

    })

}));

passport.serializeUser(function(id, done){
    done(null, id) 
});
passport.deserializeUser(function(id, done){
    app.get('db').find_session_user([id]).then(user => {
        done(null, user[0]); // id or profile info put on req.user
    })
});


// AUTHORIZATION ENDPOINTS
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: '/auth'
}));
app.get('/auth/me', function(req,res){
    if(req.user){
        return res.status(200).send(req.user)
    } else {
        res.status(401).send('Unauthorized: Need to log in.')
    }
});
app.get('/logout', function(req, res){
    req.logOut();
    return res.redirect('http://localhost:3000/')
});


//FRIEND ENDPOINTS
// app.get('/api/users', controller.getUsers);

// app.get('/api/friend/list', controller.);
// app.post('/api/friend/add, controller.);
// app.post('/api/friend/remove, controller.);

// //USER ENDPOINTS
// app.patch('/api/user/patch/:id', controller.);
// app.get('/api/user/list', controller.);
// app.get('/api/user/search' , controller.);

//RECOMMENDED ENDPOINTS
// app.post('/api/recommended', controller.);
// app.post('/api/recommended/add', controller.);


app.listen(port, ()=> console.log(`listening on port ${port}`));    