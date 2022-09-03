import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpozy2EJrFtE5TKuzywntfkcHLT1AhXQM",
    authDomain: "twitter-clone-ac5b0.firebaseapp.com",
    projectId: "twitter-clone-ac5b0",
    storageBucket: "twitter-clone-ac5b0.appspot.com",
    messagingSenderId: "184124850479",
    appId: "1:184124850479:web:fc954fdf00fec1a959e1da",
    measurementId: "G-30H3JKEE9S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
