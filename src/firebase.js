import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBfV7cF79HTuDd8mHtIhoW09ngYD297XUc",
    authDomain: "travel-d1a78.firebaseapp.com",
    projectId: "travel-d1a78",
    storageBucket: "travel-d1a78.appspot.com",
    messagingSenderId: "957878449588",
    appId: "1:957878449588:web:efc88a8c8fb42b337c6ee1",
    measurementId: "G-RRV6NTY91G",
    databaseURL: "https://travel-d1a78-default-rtdb.asia-southeast1.firebasedatabase.app"
  };
  
  const firebaseApp=initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)
const database=getDatabase(firebaseApp)
export { auth ,database}