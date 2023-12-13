import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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
  const firestore = getFirestore(app);

  export { app, firestore };