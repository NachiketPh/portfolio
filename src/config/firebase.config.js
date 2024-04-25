import { getApps,getApp, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6bEW4nRmta8HVdh7C8rorAYnl3TW-oMk",
    authDomain: "portfolio-201d8.firebaseapp.com",
    databaseURL: "https://portfolio-201d8-default-rtdb.firebaseio.com",
    projectId: "portfolio-201d8",
    storageBucket: "portfolio-201d8.appspot.com",
    messagingSenderId: "1052860543266",
    appId: "1:1052860543266:web:9b9807e0542ac52a61f57b",
    measurementId: "G-H8R9SWG1CM"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db}