import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDP2sygv0bRxp1a8nXsITLgB89drpDoce4",
    authDomain: "loginsystem-36d61.firebaseapp.com",
    projectId: "loginsystem-36d61",
    storageBucket: "loginsystem-36d61.appspot.com",
    messagingSenderId: "1006652074253",
    appId: "1:1006652074253:web:88f0841d140e8de459a844"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
export default db