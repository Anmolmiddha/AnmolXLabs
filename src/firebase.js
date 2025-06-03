// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmTlyBksiRdRkM4swPhZ6xV96CNnhNZRk",
  authDomain: "anmolxlabs-main-server.firebaseapp.com",
  projectId: "anmolxlabs-main-server",
  storageBucket: "anmolxlabs-main-server.firebasestorage.app",
  messagingSenderId: "1027967177673",
  appId: "1:1027967177673:web:776393c1177babe1ba4e18"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
