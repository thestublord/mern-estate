// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-ac54f.firebaseapp.com",
  projectId: "real-estate-ac54f",
  storageBucket: "real-estate-ac54f.appspot.com",
  messagingSenderId: "1043814243241",
  appId: "1:1043814243241:web:77654df274d7940bf342b8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
