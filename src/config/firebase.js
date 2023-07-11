// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEGNwPOG1QuZIpYGI9WcD-hhyk3YV6p3I",
  authDomain: "instagram-18f34.firebaseapp.com",
  projectId: "instagram-18f34",
  storageBucket: "instagram-18f34.appspot.com",
  messagingSenderId: "810095957219",
  appId: "1:810095957219:web:596b082805b0dab69961d6",
  measurementId: "G-P566HKKT9X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
