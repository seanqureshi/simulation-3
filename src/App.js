import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import router from './router';


class App extends Component {

  render() {
    return (
      <HashRouter>
        { router }
      </HashRouter>
    );
  }
}

export default App;


