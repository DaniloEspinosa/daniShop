// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCPxXJ-pYYfnRv3K1bnu3c-huUg38elfB8",
  authDomain: "danishop-db45b.firebaseapp.com",
  projectId: "danishop-db45b",
  storageBucket: "danishop-db45b.firebasestorage.app",
  messagingSenderId: "643561107485",
  appId: "1:643561107485:web:c649d9fbed0b99edb056f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)