import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDAmfbUUXGG5FLg_g2Kcv6k6N_zwSY_xF8",
    authDomain: "pruebaaifos26-5-24.firebaseapp.com",
    projectId: "pruebaaifos26-5-24",
    storageBucket: "pruebaaifos26-5-24.appspot.com",
    messagingSenderId: "545705605037",
    appId: "1:545705605037:web:7064c53537cc399e069324"
  };

firebase.initializeApp(firebaseConfig);

export default firebase