import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjeGm92Zwq-zGYR9UMAtFbvS-G2GPD6UE",
  authDomain: "whatsapp-web-cloneapp.firebaseapp.com",
  databaseURL: "https://whatsapp-web-cloneapp.firebaseio.com",
  projectId: "whatsapp-web-cloneapp",
  storageBucket: "whatsapp-web-cloneapp.appspot.com",
  messagingSenderId: "890917933941",
  appId: "1:890917933941:web:f17c8efa0c4a6177fef93c",
  measurementId: "G-1M9KG2L9YQ",
};

// ----------------------------------------------------------
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
