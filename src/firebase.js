import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5Y6q4uZxwoRI89PJN6LrJBGyR5H4a07I",
    authDomain: "clone-45b3d.firebaseapp.com",
    projectId: "clone-45b3d",
    storageBucket: "clone-45b3d.appspot.com",
    messagingSenderId: "650914458638",
    appId: "1:650914458638:web:64f8add3333de8a2d5e05f",
    measurementId: "G-GJXNGKXGHH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };