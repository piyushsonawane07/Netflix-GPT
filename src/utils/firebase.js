// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRaFNPZ3awAGCZksBRh9jVtQkKAUkbgtM",
  authDomain: "netflix-gpt-299ea.firebaseapp.com",
  projectId: "netflix-gpt-299ea",
  storageBucket: "netflix-gpt-299ea.appspot.com",
  messagingSenderId: "412677592629",
  appId: "1:412677592629:web:5fa24237f16b5d0df5037c",
  measurementId: "G-V5HB30MBFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();