import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './components/Login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Login />
        {
          /*
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          */
        }
      </div>
    );
  }
}

export default App;
