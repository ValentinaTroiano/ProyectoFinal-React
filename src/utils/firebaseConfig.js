// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcGJytm3zsKeEaaCMuzfwZjHbxnQAu6dE",
  authDomain: "proyecto-final-react-d08f3.firebaseapp.com",
  projectId: "proyecto-final-react-d08f3",
  storageBucket: "proyecto-final-react-d08f3.appspot.com",
  messagingSenderId: "582695762063",
  appId: "1:582695762063:web:0b3b7faee916f4b08518fa",
  measurementId: "G-QL75TVNFQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;