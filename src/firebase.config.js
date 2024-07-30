// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn_kmFJcJgyEQJPnckVcO2_DTpQ1bG6Xw",
  authDomain: "dooper-337c0.firebaseapp.com",
  projectId: "dooper-337c0",
  storageBucket: "dooper-337c0.appspot.com",
  messagingSenderId: "832806828460",
  appId: "1:832806828460:web:32056543b610b927c32209",
  measurementId: "G-KXD62Z9PT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
