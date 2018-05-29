import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import SignIn from './SignIn'
import { auth } from './base'

class App extends Component {
  state = {
    uid: null,
  }

  componentWillMount() {
    auth.onAuthStateChanged(
      (user) => {
        if(user) {
          this.handleAuth(user)
        } else {
          this.handleUnauth()
        }
      }
    )
  }

  handleAuth = (user) => {
    this.setState({ uid: user.uid })
  }

  handleUnauth = () => {
    this.setState({ uid: null })
  }

  signOut = () => {
    auth.signOut()
  }

  signedIn = () => {
    return this.state.uid
  }

  render() {
    return (
      <div className="App">
        { this.signedIn() 
          ? <Main signOut={this.signOut} uid={this.state.uid} /> 
          : <SignIn handleAuth={this.handleAuth}/> 
        }
      </div>
    );
  }
}

export default App;
