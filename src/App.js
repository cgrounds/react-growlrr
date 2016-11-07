import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from './utils/firebase';
import _ from 'lodash';
// import NewGrowl from './NewGrowl';
import Growl from './Growl';

class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
     growls: []
   }
 }

 componentDidMount() {
   firebase.database().ref('/growlrr').on('value', snapshot => {
     let growls = snapshot.val();
     console.log('growls', growls);
     this.setState({growls});
   });
 }

 render() {
   return (
     <div className="App">
       <header className='App-header'>
         <h1>Welcome to Growlrrrrrr</h1>

       </header>
       <main>
         <ul>
           {_.map(this.state.growls, (growl, id) => <Growl id={id} growl={growl.growl} key={id} firebase={firebase} />) }
         </ul>
       </main>
     </div>
   );
 }
}

export default App;
