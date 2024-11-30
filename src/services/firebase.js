//
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkeq_8QHPXp_sf_plI-FokZId8WcQHWlQ",
  authDomain: "atelier-alice-3b9c3.firebaseapp.com",
  projectId: "atelier-alice-3b9c3",
  storageBucket: "atelier-alice-3b9c3.firebasestorage.app",
  messagingSenderId: "574778878472",
  appId: "1:574778878472:web:6c4cc9253b1b0652af7fbd",
  measurementId: "G-C1RMV4GBX1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

//const analytics = getAnalytics(app);
//export { analytics };