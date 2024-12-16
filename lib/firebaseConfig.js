// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCfIL_Mv-QdkVG1pd15RMRrR-nAqSVx2fM",
  authDomain: "mynasaapodapp.firebaseapp.com",
  projectId: "mynasaapodapp",
  storageBucket: "mynasaapodapp.firebasestorage.app",
  messagingSenderId: "905800868571",
  appId: "1:905800868571:web:64430f84612a1526aea2fe",
  measurementId: "G-9KCTC7KM7G"
};

export const create = initializeApp(firebaseConfig);

export const db = getFirestore();

