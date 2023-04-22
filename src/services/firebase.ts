// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnqv1Hj322MY5cV5VhEdqWH4yXNCk8U0c",
  authDomain: "geradorando-senha.firebaseapp.com",
  projectId: "geradorando-senha",
  storageBucket: "geradorando-senha.appspot.com",
  messagingSenderId: "1073720190224",
  appId: "1:1073720190224:web:3331449c0ce8fd237ff195"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp