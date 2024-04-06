// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfyUQvrqpIMhHAZFyoq8cyCZ7n_kwR8qQ",
  authDomain: "dailynews-9c5bf.firebaseapp.com",
  projectId: "dailynews-9c5bf",
  storageBucket: "dailynews-9c5bf.appspot.com",
  messagingSenderId: "1006712250987",
  appId: "1:1006712250987:web:3193b885bd93d608e6072e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;