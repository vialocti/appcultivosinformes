// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";

import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8TUsT1UkiRrGtF-32aFvh3HxBCLFsJVY",
    authDomain: "cultivos-informes.firebaseapp.com",
    projectId: "cultivos-informes",
    storageBucket: "cultivos-informes.appspot.com",
    messagingSenderId: "976056512691",
    appId: "1:976056512691:web:bf32211f5c6c8c748800c6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()
  