// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY_k5gT8T1dUQeb3JidS2-CuK3_kV9Uv4",
  authDomain: "my-blog-71656.firebaseapp.com",
  projectId: "my-blog-71656",
  storageBucket: "my-blog-71656.appspot.com",
  messagingSenderId: "817967347682",
  appId: "1:817967347682:web:c7fb9edcee10a30372abbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();