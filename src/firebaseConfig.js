// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMv8CxTL06x_esT7g7Wqu5I65sepnuyUk",
  authDomain: "alianza-ministerial.firebaseapp.com",
  projectId: "alianza-ministerial",
  storageBucket: "alianza-ministerial.appspot.com",
  messagingSenderId: "352316651945",
  appId: "1:352316651945:web:9ed99beda22b66e8606cb8",
  measurementId: "G-XJ0L3H2ZZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let firebaseApp;

if (getApps().length === 0) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  console.log("Ya hay una app iniciada")
  firebaseApp = getApp();

}

export { firebaseApp };
