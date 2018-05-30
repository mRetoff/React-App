import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAWyFQXkzhol-mugZ7Vhn2zHVv9kwYiXXc",
    authDomain: "noteherder-e7579.firebaseapp.com",
    databaseURL: "https://noteherder-e7579.firebaseio.com",
    projectId: "noteherder-e7579",
    storageBucket: "noteherder-e7579.appspot.com",
    messagingSenderId: "545881504269"
}
const app = firebase.initializeApp(config)

export const githubProv = new firebase.auth.GithubAuthProvider()
export const googleProv = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default Rebase.createClass(app.database())