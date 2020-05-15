// Add Firebase SDKs and initialize Firebase

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCRTw1egOx2AEVZQJNig1Z5IPT_egT8PCw',
  authDomain: 'supreme-bkk.firebaseapp.com',
  databaseURL: 'https://supreme-bkk.firebaseio.com',
  projectId: 'supreme-bkk',
  storageBucket: 'supreme-bkk.appspot.com',
  messagingSenderId: '1017509859861',
  appId: '1:1017509859861:web:949348048873318233b41c',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const { displayName } = additionalData ? additionalData : userAuth;
  if (displayName) {
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      const { email } = userAuth;
      const createAt = new Date();
      try {
        console.log(displayName);
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData,
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Google Authentication

// Read doc => pretty clear to setup signInWithGoogle funciton
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
