/*
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDQARyP7Si8mxsBTgcuuAYfPe-Osl0ECB4",
  authDomain: "react-hooks-crud-d4a29.firebaseapp.com",
  projectId: "react-hooks-crud-d4a29",
  storageBucket: "react-hooks-crud-d4a29.appspot.com",
  messagingSenderId: "40780160922",
  appId: "1:40780160922:web:86834f1a49900734e56423",
  measurementId: "G-4XXKKERKGS"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/





import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;