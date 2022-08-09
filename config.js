import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBnWD7w81EON_wbjkTyaMaxdQejc6OwBBU",
    authDomain: "e-ride-70785.firebaseapp.com",
    databaseURL: "https://e-ride-70785-default-rtdb.firebaseio.com",
    projectId: "e-ride-70785",
    storageBucket: "e-ride-70785.appspot.com",
    messagingSenderId: "769327586924",
    appId: "1:769327586924:web:e710a0b013cfe9de7ac249",
    measurementId: "G-1NKWVDFJRX"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
