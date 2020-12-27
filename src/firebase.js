import firebase from "firebase";

//Config FireBase
const firebaseConfig = {
  apiKey: "AIzaSyDP7MFX-BIybkkk2OpTTZG8Mpqy8YqKZWA",
  authDomain: "social-web-cb701.firebaseapp.com",
  projectId: "social-web-cb701",
  storageBucket: "social-web-cb701.appspot.com",
  messagingSenderId: "66254870982",
  appId: "1:66254870982:web:471ca9412821eb2e413ac7",
  measurementId: "G-YCGM5M7FR2"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(); 
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider, storage };


