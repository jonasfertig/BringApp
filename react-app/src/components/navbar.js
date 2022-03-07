import React, { Component } from 'react';
import Profile from "./profile.js";
import Login from './login';

class Navbar extends React.Component {

  render() {
    return (
      <div className="glass left-glas">
        <div className="circle-container">
          <Profile navCallback={this.props.navCallback}>Test</Profile>
        </div>
        <div className="nav-list-container">
          <ul className="nav-list">
            <li onClick={() => this.props.navCallback('support')}>Home</li>
            <li onClick={() => this.props.navCallback('home')}>Shopper</li>
            <li onClick={() => this.props.navCallback('privacy')}>Client</li>
          </ul>
        </div>
        <Login></Login>
      </div>
    );
  }
};

export default Navbar;
