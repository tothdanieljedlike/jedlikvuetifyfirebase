import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBiwZ7NKgN36-O7UGry4P4KllkquqC-DFo",
  authDomain: "fir-tank.firebaseapp.com",
  databaseURL: "https://fir-tank.firebaseio.com",
  projectId: "fir-tank",
  storageBucket: "",
  messagingSenderId: "232253069642"
};

let app = firebase.initializeApp(config);
const db = app.firestore();
db.settings({ timestampsInSnapshots: true });
export default db;
