import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import SignIn from './SignIn'
import { auth } from './base'
import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  state = {
    uid: null,
  }

  componentWillMount() {
    const uid = localStorage.getItem('uid')
    if(uid) {
      this.setState( {uid} )
    }
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
    localStorage.setItem('uid', user.uid)
  }

  handleUnauth = (user) => {
    this.setState({ uid: null })
    localStorage.removeItem('uid', user.uid)
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
        <Switch>
          <Route
            path="/sign-in"
            render={() => (
              this.signedIn()
                ? <Redirect to="/notes" />
                : <SignIn />
            )}
          />
          <Route
            path="/notes"
            render={() => (
              this.signedIn()
                ? <Main signOut={this.signOut} uid={this.state.uid} />
                : <Redirect to="/sign-in" />
            )}
          />
          <Route
            render={() => (
              this.signedIn()
                ? <Redirect to="/notes" />
                : <Redirect to="/sign-in" />
            )}
          />
        </Switch>
        { /*this.signedIn() 
          ? <Main signOut={this.signOut} uid={this.state.uid} /> 
          : <SignIn handleAuth={this.handleAuth}/> 
        */}
      </div>
    );
  }
}

export default App;
