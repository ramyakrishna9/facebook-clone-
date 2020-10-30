import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC1t1r7mBO_dHiJg__2za1o8d0pBoRcWtY",
    authDomain: "facebook-clone-10d9c.firebaseapp.com",
    databaseURL: "https://facebook-clone-10d9c.firebaseio.com",
    projectId: "facebook-clone-10d9c",
    storageBucket: "facebook-clone-10d9c.appspot.com",
    messagingSenderId: "774756100152",
    appId: "1:774756100152:web:ddaaa66cd3084e9ced5ecd",
    measurementId: "G-KYPL5T3GX5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;