// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLMYvP5sFrFvJcz-Qi_UZiJ15Zc4o62uo",
  authDomain: "diabetes-predictor-76178.firebaseapp.com",
  projectId: "diabetes-predictor-76178",
  storageBucket: "diabetes-predictor-76178.appspot.com",
  messagingSenderId: "298234660699",
  appId: "1:298234660699:web:7fad2084967e23c801bc7e",
  measurementId: "G-V87VQQSLYC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };
