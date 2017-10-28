// module.exports = {
//     getFriendsList: function(req, res, next){
//         req.app.get('db').getFriends(session.user.id).then(friends => {
//             res.status(200).send(friends)
//         });
//     },
//     recommended:  function(req,res,next){
//         const value = req.body;
//         req.app.get('db').getFriends(value, session.user.value).then(friends => {
//             res.status(200).send(friends != session.user);
//         })
//     },
//     search_first_name:  function(req,res,next){
        
        
//                 let { query } = req
                
//                 req.app.get('db').filter_first_name( query.first_name ).then( filtered => res.status(200).send( filtered ) )
        
//             },
//                 search_last_name:  function(req,res,next){
                    
                    
//                             let { query } = req
                            
//                             req.app.get('db').filter_last_name( query.last_name ).then( filtered => res.status(200).send( filtered ) )
//         },
//     addFriend: function(req, res, next){
//         const { friendId, authId } = req.body;
//         req.app.get('db').add_friends(friendId, authId).then(added => {
//             added.app.get('db').getFriends(session.user.id).then(friends => {
//                 res.status(200).send(friends);
//             });
//         })
//     },
//     removeFriend: function(req, res, next){
//         const { friendId, authId } = req.body;
//         req.app.get('db').remove_friends(friendId, authId).then(removed => {
//             removed.app.get('db').getFriends(session.user.id).then(friends => {
//                 res.status(200).send(friends);
//             })
//         })
//     },
//     updateUser: function(req, res, next) {
//         req.app.get('db').update_user().then(user => {
//             res.status(200).send(user)
//         })
//     },
// }