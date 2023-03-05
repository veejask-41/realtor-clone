// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNqRCa_QX1d80xB-06E7y1gsPAotFUlGo",
  authDomain: "realtor-clone-6a34d.firebaseapp.com",
  projectId: "realtor-clone-6a34d",
  storageBucket: "realtor-clone-6a34d.appspot.com",
  messagingSenderId: "504261141458",
  appId: "1:504261141458:web:5a9eb50e256d68597dde0b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
