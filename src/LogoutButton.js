import React, {Component} from 'react';

class LogoutButton extends Component {
 constructor(props) {
   super(props);

   this._handleClick = this._handleClick.bind(this);
 }

 _handleClick() {
   this.props.firebase.auth().signOut();
 }

 render() {
   return(
     <button onClick={this._handleClick}>{this.props.children}</button>
   );
 }
}

export default LogoutButton;
