import { initializeApp }             from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore}                from "firebase/firestore";

const firebaseConfig = {
  apiKey:            "AIzaSyAUQqCkFRZU2kW4aZWn-RJ1qwkJstuyQBw",
  authDomain:        "blog-93622.firebaseapp.com",
  projectId:         "blog-93622",
  storageBucket:     "blog-93622.appspot.com",
  messagingSenderId: "855978430152",
  appId:             "1:855978430152:web:59d0d56d6bfeaba2be1ffd"
};

const app      = initializeApp(firebaseConfig);
const auth     = getAuth(app);
const provider = new GoogleAuthProvider();
const db       = getFirestore(app);

export {auth, provider, db}