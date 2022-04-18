// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYvp105_0k-Kmbt1voCyfv-3W7lJ4qr3I",
  authDomain: "agro-advisor.firebaseapp.com",
  projectId: "agro-advisor",
  storageBucket: "agro-advisor.appspot.com",
  messagingSenderId: "672226035693",
  appId: "1:672226035693:web:6cc8919176b742e1ab89e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;