import React, { Component } from 'react';
import logo from './smile.png'
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <main className="main-container">
          <div className="logo-container">
            <img className="img-container" src={logo} alt="Helo logo" />
            <div className="logo-text">Helo</div>
            <div className="link-container">
              <a href={process.env.REACT_APP_LOGIN}>
                <center><button type='' className='btn-login'>Login / Register</button></center>
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Login;