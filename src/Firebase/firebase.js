import app from 'firebase/app';
import 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
    }

    //registration
    doCreateUserWithEmailAndPassword = (email,password) => 
    this.auth.createUserWithEmailAndPassword(email,password);
    //log in
    doSignInWithEmailAndPassword  = (email,password) => 
    this.auth.SignInWithEmailAndPassword(email,password);

    //sign out
    doSignOut = () => this.auth.signOut();

    //password reset
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    //password update
    doPasswordUpdate = password => 
    this.auth.currentUser.updatePassword(password);

  }
   
  export default Firebase;