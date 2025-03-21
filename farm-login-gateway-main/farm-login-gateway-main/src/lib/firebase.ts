
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmzkmIkVAmWGI3PrqKzcRjE08RKT7BnCI",
  authDomain: "login-form1-44264.firebaseapp.com",
  projectId: "login-form1-44264",
  storageBucket: "login-form1-44264.firebasestorage.app",
  messagingSenderId: "321283240254",
  appId: "1:321283240254:web:3a430922ff46c626d2fc6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
