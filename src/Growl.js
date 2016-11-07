import React, {Component} from 'react';


class Growl extends Component {
  render() {
    let deleteButton;
    if(this.props.currentUser === this.props.user){
      deleteButton = (<a href="#">Delete</a>)
    }
    return(
      <li key={this.props.id} data-user={this.props.user}> {this.props.text} {deleteButton} </li>

    )
  }
}

export default Growl;
