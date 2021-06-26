import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCAaNONUNNIMhT4wGuphHhYE5ZzrMxUZZQ",
  authDomain: "santa-f82e5.firebaseapp.com",
  projectId: "santa-f82e5",
  storageBucket: "santa-f82e5.appspot.com",
  messagingSenderId: "516891567996",
  appId: "1:516891567996:web:632745fc930adf1c7126f9",
  measurementId: "G-FPSTHMHD6S"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
