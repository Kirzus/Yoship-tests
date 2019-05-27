import React, { Component } from 'react';

// Components Imports
import Copyright from "./Copyright/Copyright";
import ContactContainer from "./Contact/ContactContainer";

// CSS Imports
import './Footer.css'

class Footer extends Component {
    state = {  }
    render() { 
        return (
          <div className="Footer bg-black">
            <ContactContainer />
            <Copyright />
          </div>
        );
    }
}
 
export default Footer;