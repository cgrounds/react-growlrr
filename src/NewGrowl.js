import React, {Component} from 'react';
// import firebase from 'firebase';


export default class NewGrowl extends Component {
  constructor(props){
    super(props)

    this._handleSubmit = this._handleSubmit.bind(this)
  }
  _handleSubmit(e){
    e.preventDefault();
  let growl = this.refs.growl.value;
  console.log('growl', growl)
  this.props.firebase.database().ref('/growlrr').push({
    growl: growl
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
