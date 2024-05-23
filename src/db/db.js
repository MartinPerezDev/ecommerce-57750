import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqA3Nu1bMVKD7EsB0cSNb2Y6VHV0x3YoM",
  authDomain: "ecommerce-57750.firebaseapp.com",
  projectId: "ecommerce-57750",
  storageBucket: "ecommerce-57750.appspot.com",
  messagingSenderId: "1038277810305",
  appId: "1:1038277810305:web:b34052c15272225dd81580"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db