import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCevT4BNu5MbKTKBGWgjbJtsvF4VgHyzfY",
  authDomain: "mkc-krypton-3975e.firebaseapp.com",
  projectId: "mkc-krypton-3975e",
  storageBucket: "mkc-krypton-3975e.appspot.com",
  messagingSenderId: "327713645006",
  appId: "1:327713645006:web:b043f8448272a4785e0b9f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;