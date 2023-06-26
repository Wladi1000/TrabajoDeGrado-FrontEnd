import './assets/styles/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';

// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

// FireStore
import { getFirestore } from 'firebase/firestore';

//import { getAnalytics } from "firebase/analytics";

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
initializeApp(firebaseConfig);
//getAnalytics(app);

// FireStore
const db = getFirestore();
export { db };

const app = createApp(App);

app.use(router);

app.mount('#app');