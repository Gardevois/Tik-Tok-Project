
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAsCYRHtl1dOI_z7xWPKLN-c1FXTgBzvBE",
  authDomain: "ticoteco-c81c1.firebaseapp.com",
  projectId: "ticoteco-c81c1",
  storageBucket: "ticoteco-c81c1.appspot.com",
  messagingSenderId: "1040137182683",
  appId: "1:1040137182683:web:8f1ae27cf429c744439bfe",
  measurementId: "G-RSW8NQZSWK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;