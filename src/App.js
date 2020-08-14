import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import firebase, { auth, provider } from './firebase.js';

import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import CustomFooter from './components/CustomFooter/CustomFooter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
}

  handleChange(e) {
    /* ... */
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <CustomNavbar  user={this.state.user} login={this.login}  logout={this.logout}/>

          <FirstSection user={this.state.user} login={this.login} />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <CustomFooter />
        </div>
      </Router>
    );
  }
}

export default App;
