// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Hq8oTqeoXktqIYOwTyqvJL7agOWyqu0",
  authDomain: "emsbykk.firebaseapp.com",
  projectId: "emsbykk",
  storageBucket: "emsbykk.firebasestorage.app",
  messagingSenderId: "720560216159",
  appId: "1:720560216159:web:63aa22184bc4bdc1caa3ea",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// We are connecting our application to database
export const db =getFirestore(app)