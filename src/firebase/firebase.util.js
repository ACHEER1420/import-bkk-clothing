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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Google Authentication


// Read doc => pretty clear to setup signInWithGoogle funciton
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;