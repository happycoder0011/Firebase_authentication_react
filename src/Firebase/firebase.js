import app from 'firebase/app';
import 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   
    apiKey: "AIzaSyAmzwQv7CS_wWjN3YZjbIYTZ11gYuJYZrY",
    authDomain: "userauth-376a5.firebaseapp.com",
    databaseURL: "https://userauth-376a5.firebaseio.com",
    projectId: "userauth-376a5",
    storageBucket: "userauth-376a5.appspot.com",
    messagingSenderId: "554539809112",
    appId: "1:554539809112:web:3fdcdf044df09897ed0d2d",
    measurementId: "G-ZVRTD5SSZ8"
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