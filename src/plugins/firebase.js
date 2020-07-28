import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXqv-1VM0FqaUlwnvcOfgOR4I6G9FetG0",
  authDomain: "portfolio-f01a5.firebaseapp.com",
  databaseURL: "https://portfolio-f01a5.firebaseio.com",
  projectId: "portfolio-f01a5",
  storageBucket: "portfolio-f01a5.appspot.com",
  messagingSenderId: "282847632069",
  appId: "1:282847632069:web:36443ca4bbb6d1af876eac",
  measurementId: "G-WVCB73WGFH"
};

firebase.initializeApp(firebaseConfig);
export const functions = firebase.functions();
