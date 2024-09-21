
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAFXFXxrBRJYemMVu4F9s1OpSMRCA-7XQc",
  authDomain: "book-store-d5ec2.firebaseapp.com",
  projectId: "book-store-d5ec2",
  storageBucket: "book-store-d5ec2.appspot.com",
  messagingSenderId: "974169870609",
  appId: "1:974169870609:web:8b4535f49ac2832fb4bcb0"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
