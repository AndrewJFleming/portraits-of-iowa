import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // Collapse handled with React instead of bootstrap
  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render() {
    const show = (this.state.menu) ? "show" : "" ;

    const authentification = (
      this.props.user ?
        <button onClick={this.props.logout}>Log Out</button>                
        :
        <button onClick={this.props.login}>Log In</button>              
    )

    return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: "#303030e6", borderBottom: "1px solid #ff00ff"}}>
      <Link
        className="navbar-brand"
        smooth
        to="#first"
        // activeClassName="selected"
      >Portraits of Iowa</Link>
      <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }> 
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + show}>
        <div className="navbar-nav ml-auto">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" >
              <Link
                smooth
                to="#second"
                // activeClassName="selected"
                >about the sculpture</Link>
            </li>
            <li className="nav-item" >
              <Link
                smooth
                to="#third"
                // activeClassName="selected"
                >about the photos</Link>
            </li>
            <li className="nav-item" >
              <Link
                smooth
                to="#fourth"
                // activeClassName="selected"
                >more info</Link>
            </li>
            <li className="nav-item" >
              {authentification}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}