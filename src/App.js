import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './utils/firebase';
import _ from 'lodash';
import Growl from './Growl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Growl />
      </div>
    );
  }
}

export default App;
