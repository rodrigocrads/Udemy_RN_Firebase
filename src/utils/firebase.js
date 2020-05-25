import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBrGU_qCjCG0AWKyim_n99bYYe5BF3pHC8",
    authDomain: "teste-10e4a.firebaseapp.com",
    databaseURL: "https://teste-10e4a.firebaseio.com",
    projectId: "teste-10e4a",
    storageBucket: "teste-10e4a.appspot.com",
    messagingSenderId: "1085846919174",
    appId: "1:1085846919174:web:b839e2f6610e68fd00cb87",
    measurementId: "G-2QP2EM3E15"
  };

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();