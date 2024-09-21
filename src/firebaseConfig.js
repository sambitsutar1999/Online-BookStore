// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import auth functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFXFXxrBRJYemMVu4F9s1OpSMRCA-7XQc",
  authDomain: "book-store-d5ec2.firebaseapp.com",
  projectId: "book-store-d5ec2",
  storageBucket: "book-store-d5ec2.appspot.com",
  messagingSenderId: "974169870609",
  appId: "1:974169870609:web:8b4535f49ac2832fb4bcb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth
const provider = new GoogleAuthProvider(); // Create a Google Auth provider

export { auth, provider }; // Export auth and provider for use in the app
