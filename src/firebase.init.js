// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLVdhTOm_B48FcvyY773JN5ZCFCxsriKI",
  authDomain: "natural-food-inventory.firebaseapp.com",
  projectId: "natural-food-inventory",
  storageBucket: "natural-food-inventory.appspot.com",
  messagingSenderId: "105378193497",
  appId: "1:105378193497:web:ae00bb11342acbc7075148"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;