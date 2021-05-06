import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRQJKKE0N-4lV3uywgOCRVNbZxBi7BoEM",
  authDomain: "dunes-slack-clone-react.firebaseapp.com",
  projectId: "dunes-slack-clone-react",
  storageBucket: "dunes-slack-clone-react.appspot.com",
  messagingSenderId: "237640730811",
  appId: "1:237640730811:web:767fd5f737e4551c0d819e",
  measurementId: "G-E9RZDDRB5C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
