import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBnIYWvJZYUiWvYt3Ei_cFVeR2qolrBoBQ",
  authDomain: "app-chat-af595.firebaseapp.com",
  projectId: "app-chat-af595",
  storageBucket: "app-chat-af595.firebasestorage.app",
  messagingSenderId: "936809093064",
  appId: "1:936809093064:web:f44ce1ae35eb04897412fd",
  measurementId: "G-J2VNN1D5DL"
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp); 
export const db = getFirestore(firebaseApp); 
export const auth = getAuth(firebaseApp);    
export const googleProvider = new GoogleAuthProvider()
export default firebaseApp;
