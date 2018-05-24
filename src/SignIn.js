import React from 'react'

import quill from './quill.svg'
import googleLogo from './google.svg'
import './SignIn.css'
import { auth, githubProv, googleProv } from './base'

const SignIn = () => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }
    return (
        <div className="SignIn">
            <header className="Header">
                <img src={quill} alt="Noteherder" />
                <span className="title">Noteherder</span>
            </header>
            <main>
                <h3>Hey, Nerd! You Like Notes?</h3>
                <p>You never know when you'll need to write crap down. In fact, you should probably be taking notes right now.</p>
                <button className="github" onClick={() => authenticate(githubProv)}>
                    <i className="fab fa-github"></i>
                    Sign in with GitHub
                </button>
                <button className="google" onClick={() => authenticate(googleProv)}>
                    <img src={googleLogo} alt="" />
                    Sign in with Google
                </button>
            </main>
      </div>
    )
}

export default SignIn