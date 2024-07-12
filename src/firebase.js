// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBRoKKKF_O0QEu62qfgdX9gNmScR6DeeYk",
  authDomain: "telegram-bot-react.firebase.com",
  projectId: "telegram-bot-react",
  storageBucket: "telegram-bot-react.appspot.com",
  messagingSenderId: "667336007733",
  appId: "1:667336007733:web:d212ebb7a5d96d223d117c",
  measurementId: "G-KR9CTP39Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// auth.initializeAuth().then(() => {
auth.settings.appVerificationDisabledForTesting = true;
// })
// firebase.auth().settings.appVerificationDisabledForTesting = true;

export { auth, RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, signInWithPopup };
