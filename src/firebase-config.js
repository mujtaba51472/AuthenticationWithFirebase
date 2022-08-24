import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyARBgHAmKripSWiwLI554oiUTGWfHRMviU",
    authDomain: "authentication-practice-7e5fa.firebaseapp.com",
    projectId: "authentication-practice-7e5fa",
    storageBucket: "authentication-practice-7e5fa.appspot.com",
    messagingSenderId: "690900394325",
    appId: "1:690900394325:web:ca4bc548b39b7549bd0fdc",
    measurementId: "G-JY88ZP69DY"
  };

//   connection between project and firebase 
  const app= initializeApp(firebaseConfig) 
  export const auth=getAuth(app)