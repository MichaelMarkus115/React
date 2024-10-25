import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//firebase dependancies
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyAwIzUo-BZ932fCAetJ_Br2mtYVtZlbGMg",
  authDomain: "crud-project-f9b60.firebaseapp.com",
  projectId: "crud-project-f9b60",
  storageBucket: "crud-project-f9b60.appspot.com",
  messagingSenderId: "621382688052",
  appId: "1:621382688052:web:451b05537ce1d448131961",
  measurementId: "G-64H3QVQV14",
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
