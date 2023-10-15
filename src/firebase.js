// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7RyBwjZOUfcWOc1xsmdZL0MnoyYanaxE",
  authDomain: "ytejusc-7f989.firebaseapp.com",
  projectId: "ytejusc-7f989",
  storageBucket: "ytejusc-7f989.appspot.com",
  messagingSenderId: "926163651195",
  appId: "1:926163651195:web:6659f87c2821cd2c1ff0de",
  measurementId: "G-E2GHC0PBEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
export const db = getFirestore(app);