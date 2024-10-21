import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyDzhegfrURdlsiLKbEeVmg9siQJwjiIqTE",
   authDomain: "sikopi-2e2fe.firebaseapp.com",
   projectId: "sikopi-2e2fe",
   storageBucket: "sikopi-2e2fe.appspot.com",
   messagingSenderId: "933775963517",
   appId: "1:933775963517:web:b59625805ce73380964814",
   measurementId: "G-3LFP27BZRY"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase;