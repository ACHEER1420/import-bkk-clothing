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

export const addCollectionAndItems = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Google Authentication

// Read doc => pretty clear to setup signInWithGoogle funciton
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
