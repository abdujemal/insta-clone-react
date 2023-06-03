// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, setDoc, updateDoc, getDoc, getDocs, getFirestore, } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDLGiM254B03BeBnEVhezyVrhJ4ZJlRRmk",
  authDomain: "insta-clone-a307d.firebaseapp.com",
  projectId: "insta-clone-a307d",
  storageBucket: "insta-clone-a307d.appspot.com",
  messagingSenderId: "410942054053",
  appId: "1:410942054053:web:0b53b17736c75e896a374c",
  measurementId: "G-784TR3E343"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();