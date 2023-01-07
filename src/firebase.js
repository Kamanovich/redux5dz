import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD7tTkhoC8AhNs91ss7Wsa9ej4TaT7ucjc",
  authDomain: "redux5.firebaseapp.com",
  projectId: "redux5",
  storageBucket: "redux5.appspot.com",
  messagingSenderId: "442535410577",
  appId: "1:442535410577:web:2e6fd5431a008f84d5f830"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)