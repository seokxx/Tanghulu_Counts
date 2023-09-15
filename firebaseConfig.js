import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAX4z4OEsRFPAsGol6MPJQcYW4lme2eqI8",
  authDomain: "tanghulu-counts.firebaseapp.com",
  projectId: "tanghulu-counts",
  storageBucket: "tanghulu-counts.appspot.com",
  messagingSenderId: "776618373673",
  appId: "1:776618373673:web:95988a69692e8c2706a238",
  measurementId: "G-0TLS4LXX6Y",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

export { db, firebase };
