import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-m4VqUgnLxQuXGpC0SG8uILe-biAgTtA",
  authDomain: "healthorange-fd3df.firebaseapp.com",
  projectId: "healthorange-fd3df",
  storageBucket: "healthorange-fd3df.appspot.com",
  messagingSenderId: "734132442410",
  appId: "1:734132442410:web:75a588c81ffffa1107fa53",
  measurementId: "G-7ESSX1E0L0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
