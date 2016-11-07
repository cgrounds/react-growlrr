import React, {Component} from 'react';

class Growl extends Component {
  render() {
    return(
      <li onClick={this.handleCompletedClick}>
      {this.props.growl.growl}
      {' '}
    )
  }
}

export default Growl;
