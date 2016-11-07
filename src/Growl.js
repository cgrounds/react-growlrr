import React, {Component} from 'react';


class Growl extends Component {
  constructor(props) {
    super(props)

    this._handleDeleteClick = this._handleDeleteClick.bind(this)
  }

  _handleDeleteClick(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.firebase.database().ref(`/growlrr/${this.props.user}/${this.props.id}`).remove()
  }
  render() {
    let deleteButton;
    if(this.props.currentUser === this.props.user){
      deleteButton = (<a href="#" onClick={this._handleDeleteClick}>Delete</a>)
    }
    return(
      <li key={this.props.id} data-user={this.props.user}> {this.props.text} {deleteButton} </li>

    )
  }
}

export default Growl;
