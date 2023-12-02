import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdiDGJ81C30_WS19UVFGo5CV3f2TSctQM",
  authDomain: "mi-proyecto-2023-b6dd4.firebaseapp.com",
  projectId: "mi-proyecto-2023-b6dd4",
  storageBucket: "mi-proyecto-2023-b6dd4.appspot.com",
  messagingSenderId: "1049332168376",
  appId: "1:1049332168376:web:de462223b7b3b2fe61264d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
)
