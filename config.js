import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAq-OMQcG2wKLqi6rq_pdoPhi0Jo93CI-g",
  authDomain: "e-ride-7a2a0.firebaseapp.com",
  projectId: "e-ride-7a2a0",
  storageBucket: "e-ride-7a2a0.appspot.com",
  messagingSenderId: "481967333897",
  appId: "1:481967333897:web:277d00068708c6eb9a0ed8"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
