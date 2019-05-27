import React, { Component } from 'react';

import './SocialButton.css'

class SocialButton extends Component {
  state = {  }
  render() { 
    return (
      <>
        <a href={this.props.link} className="social-button">
          <i className={this.props.icon} />
        </a>
      </>
    );
  }
}
 
export default SocialButton;
