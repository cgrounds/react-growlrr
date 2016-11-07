import React, {Component} from 'react';


class Growl extends Component {
  render() {
    return(
      <li key={this.props.id} data-user={this.props.user}> {this.props.text} </li>
    
    )
  }
}

export default Growl;
