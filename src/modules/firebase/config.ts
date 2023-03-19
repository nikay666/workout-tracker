// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgt6hwx3rhBAx0iAA3yCPHi7B2rG4-pFw",
  authDomain: "workout-tracker-b6bee.firebaseapp.com",
  projectId: "workout-tracker-b6bee",
  storageBucket: "workout-tracker-b6bee.appspot.com",
  messagingSenderId: "185919450978",
  appId: "1:185919450978:web:9844424e9486c9c8a9c63b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);