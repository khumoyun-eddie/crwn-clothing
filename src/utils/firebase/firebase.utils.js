// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVmUIaNFgZQVh8D29-cdB7l1NrFhPbaiw",
  authDomain: "crwn-clothing-a758a.firebaseapp.com",
  projectId: "crwn-clothing-a758a",
  storageBucket: "crwn-clothing-a758a.appspot.com",
  messagingSenderId: "291808862647",
  appId: "1:291808862647:web:896d587da8c253b7108832",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // create/set the document with tha data from userAuth
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user: ", error.message);
    }
  }
  // if user data exists return userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async ()=> {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q)
  // console.log(querySnapshot.docs)
  const categoryMap = querySnapshot.docs.reduce((sum,docSnapshot)=>{
    const {title,items} = docSnapshot.data()
    sum[title.toLowerCase()] = items
    return sum
  },{})
  return categoryMap
}

