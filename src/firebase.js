import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD5-xIZwdztgdvh9bcaLtlz0sBrql3RZgg",
    authDomain: "netflix-clone-54272.firebaseapp.com",
    projectId: "netflix-clone-54272",
    storageBucket: "netflix-clone-54272.appspot.com",
    messagingSenderId: "343439606476",
    appId: "1:343439606476:web:58fa018261ab3b60dc3869"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

