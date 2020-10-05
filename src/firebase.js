import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyeX146B8-oDQf7Of4qxjG3eVZTgz15oo",
  authDomain: "slack-clone-a4ccd.firebaseapp.com",
  databaseURL: "https://slack-clone-a4ccd.firebaseio.com",
  projectId: "slack-clone-a4ccd",
  storageBucket: "slack-clone-a4ccd.appspot.com",
  messagingSenderId: "623149165019",
  appId: "1:623149165019:web:dc83a9fdb148a4ed6e1ffe",
  measurementId: "G-4WMD2QEFJN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;