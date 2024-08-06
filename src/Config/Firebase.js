import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


// const firebaseConfig = {
//   apiKey: "AIzaSyBh98wj72WW4YD9cRRmt1_LTKKtwXwsmvE",
//   authDomain: "sofinails-f6bfe.firebaseapp.com",
//   projectId: "sofinails-f6bfe",
//   storageBucket: "sofinails-f6bfe.appspot.com",
//   messagingSenderId: "519274494619",
//   appId: "1:519274494619:web:2c2458a8b948fc9f75e43e",
//   measurementId: "G-JDY0357GPW"
// };



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