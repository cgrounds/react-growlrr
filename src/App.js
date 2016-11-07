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
     user: ""
   }
 }

 componentDidMount() {
   firebase.database().ref('/growlrr').on('value', snapshot => {
     let growls = snapshot.val();
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
   let sessionForm;

   if(_.isEmpty(this.state.user)){
     sessionButton = (<LoginButton firebase={firebase}>Login</LoginButton>);
   } else {
     sessionButton = (<LogoutButton firebase={firebase}>Logout</LogoutButton>);
     sessionForm = <NewGrowl firebase={firebase} user={this.state.user.uid}/>
   }
   return (
     <div className="App">
       <header className='App-header'>
         <h1>Welcome to Growlrrrrrr</h1>
         {sessionButton}
         {sessionForm}
       </header>
       <main>
         <ul>
           {_.map(this.state.growls, (growlList, userId) => {
             return(
             _.map(growlList, (growl, growlId) => {
               return(
                 <Growl key={growlId} id={growlId} user={userId} text={growl.text} currentUser={this.state.user.uid} />
               )
             })
           )
           })
         }
         </ul>
       </main>
     </div>
   );
 }
}

export default App;
