import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvZYqnlVMtmDJjSQ_WNQa6nFXul9z46mk",
    authDomain: "login-f4489.firebaseapp.com",
    databaseURL: "https://login-f4489-default-rtdb.firebaseio.com",
    projectId: "login-f4489",
    storageBucket: "login-f4489.appspot.com",
    messagingSenderId: "564447251099",
    appId: "1:564447251099:web:1436d380f85b660590143e"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;