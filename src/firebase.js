import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFEyhKMgU4E0DMM_ErpZHpReBxln7QyOY",
  authDomain: "portfolio-parasbisht.firebaseapp.com",
  projectId: "portfolio-parasbisht",
  storageBucket: "portfolio-parasbisht.appspot.com",
  messagingSenderId: "163721484483",
  appId: "1:163721484483:web:820f2ca7a0a11a5303aa76",
  measurementId: "G-NR844F2P6Y"
});

const db = firebaseApp.firestore()

export {db}
