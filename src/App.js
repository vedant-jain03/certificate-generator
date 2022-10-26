import './App.css';
import React, { useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import Homepage from "./components/Homepage"
import Footer from './components/Footer';
import firebase from "./firebase"
import StyleFirebaseUi from "react-firebaseui/StyledFirebaseAuth";


// var uiConfig = {
//   signInFlow: 'popup',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID
//   ],
//   callbacks: {

//     signInSuccessWithAuthResult: () => {
//       return false;
//     }
//   }
// };

function App() {
  return (
    <div>
      <Homepage />
      <Footer />
    </div>
  )
}

export default App;
