import { initializeApp } from "firebase/app";
import {getFirestore,collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from "firebase/firestore";
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
  };

  const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)
export {db,collection,getDocs,addDoc,updateDoc,doc,deleteDoc,auth,storage}
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth,provider).then(result => {
    //console.log(result); used to check the object
    const name = result.user.displayName
    const email = result.user.email
    const photourl = result.user.photoURL

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("photourl",photourl) 
}).catch(err =>
    console.log(err.message)
)
}