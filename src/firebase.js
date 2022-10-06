import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXqZT6S_xm_1HmtMEc23gFV3TKq0BKlHE",
  authDomain: "react-blogs-12c73.firebaseapp.com",
  projectId: "react-blogs-12c73",
  storageBucket: "react-blogs-12c73.appspot.com",
  messagingSenderId: "108162533216",
  appId: "1:108162533216:web:ef525eda38cbcef9e98005"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
