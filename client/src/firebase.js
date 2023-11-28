// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "new-nine-452e9.firebaseapp.com",
  projectId: "new-nine-452e9",
  storageBucket: "new-nine-452e9.appspot.com",
  messagingSenderId: "942528773955",
  appId: "1:942528773955:web:e1d3bef99e11e3f8fd39f6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
