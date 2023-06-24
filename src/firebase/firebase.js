import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { getDoc, getFirestore, doc, setDoc } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFAOE1y5md36A2P_6fxuUz2TTv6gH8Jrg",
  authDomain: "accountant-a8147.firebaseapp.com",
  projectId: "accountant-a8147",
  storageBucket: "accountant-a8147.appspot.com",
  messagingSenderId: "1013757249045",
  appId: "1:1013757249045:web:0dbf871897205865f3b01c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt : "select_account"
});

export const auth = getAuth(app);

export const google = () => {
  signInWithPopup(auth, provider)
}

export const signUp = async(email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signIn = async(email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

export const logOut = async() => {
  return await signOut(auth)
}

export const change = (callback) => {
  onAuthStateChanged(auth, callback)
}

export const db = getFirestore()

export const userDatabase = async ( userAuth, more={} ) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) {
    const {email, displayName} = userAuth
    const createdAt = new Date()
  

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...more})
    } catch(error) {
      console.log(error)
    }
  }

  return userDocRef
}