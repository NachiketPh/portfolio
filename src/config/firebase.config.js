import { getApps,getApp, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_SECRET_KEY,
    authDomain: "portfolio-201d8.firebaseapp.com",
    databaseURL: "https://portfolio-201d8-default-rtdb.firebaseio.com",
    projectId: "portfolio-201d8",
    storageBucket: "portfolio-201d8.appspot.com",
    messagingSenderId: "1052860543266",
    appId: process.env.REACT_APP_ID ,
    measurementId: "G-H8R9SWG1CM"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db}