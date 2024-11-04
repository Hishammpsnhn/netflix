// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs2028LjfzDELlm4vAQGahRfcFHcYGOlo",
  authDomain: "netflixclone-17ede.firebaseapp.com",
  projectId: "netflixclone-17ede",
  storageBucket: "netflixclone-17ede.firebasestorage.app",
  messagingSenderId: "147827628976",
  appId: "1:147827628976:web:21598d3a5552d60a359475",
  measurementId: "G-C0TLYLW0FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {app,auth} 
