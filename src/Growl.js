import React, {Component} from 'react';


class Growl extends Component {
  render() {
    return(
      <li key={this.props.id}> {this.props.growl} </li>
    )
  }
}

export default Growl;
