// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5285c.firebaseapp.com",
  projectId: "mern-blog-5285c",
  storageBucket: "mern-blog-5285c.appspot.com",
  messagingSenderId: "859170573529",
  appId: "1:859170573529:web:2ca06d194664fcfe09c2c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);