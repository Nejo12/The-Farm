import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZoSGSJicaK9CuthGIv0K5n17bOr9LKmM",
  authDomain: "the-farm-223df.firebaseapp.com",
  databaseURL: "https://the-farm-223df.firebaseio.com",
  projectId: "the-farm-223df",
  storageBucket: "the-farm-223df.appspot.com",
  messagingSenderId: "1061647793143",
  appId: "1:1061647793143:web:00780a2ea626e3d5ca4cf2",
  measurementId: "G-NKPNKR7JKP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error rcreating user: ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
