import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC20DLzlH-sVHhrCjSxA6_LeaemwXfpfdE",
  authDomain: "db-musicapp-6a839.firebaseapp.com",
  projectId: "db-musicapp-6a839",
  storageBucket: "db-musicapp-6a839.firebasestorage.app",
  messagingSenderId: "499215832995",
  appId: "1:499215832995:web:15b8200599f5045bdc2c16",
  measurementId: "G-R6L8457ELG"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
