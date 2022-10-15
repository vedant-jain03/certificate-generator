import './App.css';
import React, {useState,useEffect} from 'react';
import Homepage from "./components/Homepage"
import firebase from "./firebase"
import StyleFirebaseUi from "react-firebaseui/StyledFirebaseAuth";


var uiConfig={
  signInFlow: 'popup',
  signInOptions : [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks:{
      
  signInSuccessWithAuthResult:()=>{
      return false;
  }
  }
};

function App() {
  const [user,setuser]=useState(null);
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            setuser(user);
        })
    })
    if(user){
        return(
          <Homepage />
        )
    }
    else{ return (
        <div id="maincontainer1">
          <h1 className="head">Hash/Hub</h1>
          <h1 className="head2">Certificate Generator</h1>
          <div className="signin">
          <h1>Sign In</h1>
            <StyleFirebaseUi uiConfig={uiConfig} firebaseAuth={firebase.auth()} setuser={setuser} user={user} />
          </div>
           
        </div>
    )
    }
}

export default App;
