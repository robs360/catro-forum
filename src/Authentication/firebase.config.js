// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-_UjZpFiOBOEKpc0jEbUiitYmhhATT2g",
  authDomain: "cat-website-c0880.firebaseapp.com",
  projectId: "cat-website-c0880",
  storageBucket: "cat-website-c0880.appspot.com",
  messagingSenderId: "662522809064",
  appId: "1:662522809064:web:057003e417a8c5542b175d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app