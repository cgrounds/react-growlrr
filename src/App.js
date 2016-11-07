import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './utils/firebase';
import _ from 'lodash';
// import Growl from './Growl';
import NewGrowl from './NewGrowl';

class App extends Component {

// componentDidMount() {
//   firebase.database().ref('growl').on()
// }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NewGrowl firebase={firebase}/>
      </div>
    );
  }
}

export default App;
