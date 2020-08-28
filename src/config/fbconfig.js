import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
var firebaseConfig = {
    apiKey: "AIzaSyDDO7hTlb5bJs-LdlCGGkW7quELajsiwLM",
    authDomain: "my-demo-project-8347e.firebaseapp.com",
    databaseURL: "https://my-demo-project-8347e.firebaseio.com",
    projectId: "my-demo-project-8347e",
    storageBucket: "my-demo-project-8347e.appspot.com",
    messagingSenderId: "640828471423",
    appId: "1:640828471423:web:bd2ccd35d04e3ade6ce74a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore()

  export default firebase