// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4aijEyFtZpwPZknqMwix9o1ArzotNNok",
  authDomain: "technical-test-makaia.firebaseapp.com",
  projectId: "technical-test-makaia",
  storageBucket: "technical-test-makaia.appspot.com",
  messagingSenderId: "296668760261",
  appId: "1:296668760261:web:bc07f0d0428512023ac8ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);