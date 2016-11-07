import React, {Component} from 'react';
// import storage from './storage';
// import ImageUpload from './ImageUpload';

export default class NewGrowl extends Component {
  constructor(props){
    super(props)

    this._handleSubmit = this._handleSubmit.bind(this)
  }
  _handleSubmit(e){
    e.preventDefault();
  let newGrowl = this.refs.growl.value;
  if (newGrowl.length > 140){
    alert("this growl is too long!! No!")
    return
  }
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
      <input type="text" placeholder="growl here" ref="growl" maxLength="141"/>
      <input type="submit" />
      </form>
    </div>
  )
}
}
