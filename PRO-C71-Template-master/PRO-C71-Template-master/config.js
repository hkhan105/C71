import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4tyzdqhyfNsyttWCvLYZawKsEj07-B4Q",
  authDomain: "e-ride-app-b22af.firebaseapp.com",
  projectId: "e-ride-app-b22af",
  storageBucket: "e-ride-app-b22af.appspot.com",
  messagingSenderId: "169499600013",
  appId: "1:169499600013:web:ca8bc30219b6a8572aaec4"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
