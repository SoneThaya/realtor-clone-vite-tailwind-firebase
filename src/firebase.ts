import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5cXNJ7dpmWQt17WSD069g8FrI1wmlNJM",
  authDomain: "realtor-cone-react.firebaseapp.com",
  projectId: "realtor-cone-react",
  storageBucket: "realtor-cone-react.appspot.com",
  messagingSenderId: "109494105586",
  appId: "1:109494105586:web:6f4eb5c78ee15db631a76b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
