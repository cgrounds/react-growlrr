import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from './utils/firebase';
import _ from 'lodash';
import NewGrowl from './NewGrowl';
import Growl from './Growl';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
     growls: [],
     user: {}
   }
 }

 componentDidMount() {
   firebase.database().ref('/growlrr').on('value', snapshot => {
     let growls = snapshot.val();
     console.log('growls', growls);
     this.setState({growls});
   });
   firebase.auth().onAuthStateChanged(user => {
     if(user){
       this.setState({user})
     } else {
       this.setState({ user:{} })
     }
   });
 }

 render() {
   let sessionButton;

   if(_.isEmpty(this.state.user)){
     sessionButton = (<LoginButton firebase={firebase}>Login</LoginButton>);
   } else {
     sessionButton = (<LogoutButton firebase={firebase}>Logout</LogoutButton>);
   }
   return (
     <div className="App">
       <header className='App-header'>
         <h1>Welcome to Growlrrrrrr</h1>
         {sessionButton}
         <NewGrowl firebase={firebase} />
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
