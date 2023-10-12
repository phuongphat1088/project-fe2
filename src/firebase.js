import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4KmO6j4HjDrzZ9eXF0WXmva5DpgI3loo",
  authDomain: "fit-chat-10cb2.firebaseapp.com",
  projectId: "fit-chat-10cb2",
  storageBucket: "fit-chat-10cb2.appspot.com",
  messagingSenderId: "642975384083",
  appId: "1:642975384083:web:afa57688f4fdb582b135e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();