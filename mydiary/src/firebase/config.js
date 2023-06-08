// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ProcessingInstruction.env.REACT_APP_API_KEY,
  authDomain: ProcessingInstruction.env.REACT_APP_AUTH_DOMAIN,
  projectId: ProcessingInstruction.env.REACT_APP_PROJECT_ID,
  storageBucket: ProcessingInstruction.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: ProcessingInstruction.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: ProcessingInstruction.env.REACT_APP_APP_ID
};

// Firebase를 초기화합니다.
const app = initializeApp(firebaseConfig);
// Firestore를 초기화합니다.
const appFireStore = getFirestore(app);
// 인증을 초기화합니다.
const appAuth = getAuth();

export {appFireStore, appAuth}