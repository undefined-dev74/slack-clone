import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDHf3wfM_MxUD_j7f1zvMB0uodX6iEvYic',
  authDomain: 'slack-clone-b3113.firebaseapp.com',
  projectId: 'slack-clone-b3113',
  storageBucket: 'slack-clone-b3113.appspot.com',
  messagingSenderId: '925261091950',
  appId: '1:925261091950:web:4631232bebad526b6e827f',
  measurementId: 'G-27LLCRTCPZ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
