// firebase.js
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //     apiKey: "AIzaSyADWwDHN9kedoUKjLZAhuwOBBV92ho1ve8",
// //     authDomain: "urban-c-3a91b.firebaseapp.com",
// //     databaseURL: "https://urban-c-3a91b-default-rtdb.firebaseio.com",
// //     projectId: "urban-c-3a91b",
// //     storageBucket: "urban-c-3a91b.appspot.com",
// //     messagingSenderId: "91784434662",
// //     appId: "1:91784434662:web:d254494fe51e8f968c3c27",
// //     measurementId: "G-Q79F8Q3QBM"
// //   };
// const firebaseConfig = {
//   apiKey: "AIzaSyCHkIVhs_3AxMbIPSu5d5XVdK0E12tauLU",
//   authDomain: "ase-project-cd5cc.firebaseapp.com",
//   databaseURL: "https://ase-project-cd5cc-default-rtdb.firebaseio.com",
//   projectId: "ase-project-cd5cc",
//   storageBucket: "ase-project-cd5cc.appspot.com",
//   messagingSenderId: "267722525013",
//   appId: "1:267722525013:web:eb23cfa8bfcab53fef47dc",
//   measurementId: "G-Z0R5S64KLV"
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }
  
//   export default firebase;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig1 = {
  apiKey: "AIzaSyBv__7H0GPDvJXujTYks28wrtzBJ3SdaoA",
  authDomain: "cs7is5-teamhera.firebaseapp.com",
  projectId: "cs7is5-teamhera",
  storageBucket: "cs7is5-teamhera.appspot.com",
  messagingSenderId: "251354686603",
  appId: "1:251354686603:web:10137b38b614a6b169e08e"
};

const firebaseConfig = {
  apiKey: "AIzaSyCHkIVhs_3AxMbIPSu5d5XVdK0E12tauLU",
  authDomain: "ase-project-cd5cc.firebaseapp.com",
  databaseURL: "https://ase-project-cd5cc-default-rtdb.firebaseio.com",
  projectId: "ase-project-cd5cc",
  storageBucket: "ase-project-cd5cc.appspot.com",
  messagingSenderId: "267722525013",
  // appId: "1:267722525013:web:eb23cfa8bfcab53fef47dc",
  // measurementId: "G-Z0R5S64KLV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const app2 = initializeApp(firebaseConfig1, "other");

export const auth = getAuth(app2);
export const db = getFirestore(app);

export default app;

// export default app2;
