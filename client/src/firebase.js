// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d71f4.firebaseapp.com",
  projectId: "mern-estate-d71f4",
  storageBucket: "mern-estate-d71f4.appspot.com",
  messagingSenderId: "605753847695",
  appId: "1:605753847695:web:95034e373b7e0ec19ca5fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);