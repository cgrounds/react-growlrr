import React, {Component} from 'react';
// import firebase from 'firebase';


export default class NewGrowl extends Component {
  constructor(props){
    super(props)

    this._handleSubmit = this._handleSubmit.bind(this)
  }
  _handleSubmit(e){
    e.preventDefault();
  let newGrowl = this.refs.growl.value;
  this.props.firebase.database().ref(`/growlrr/${this.props.user}`).push({
    text: newGrowl
  }).then(() => {
    this.refs.growl.value = ''
    })
  }

  render() {
  return(
    <div>
      <form onSubmit={this._handleSubmit}>
      <input type="text" placeholder="growl here" ref="growl" />
      <input type="submit" />
      </form>
    </div>
  )
}
}
