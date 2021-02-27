import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDB-MrhWqu3VmL2WtNNDqzO6RFrv6rJ9WE",
    authDomain: "lucid-formula-302905.firebaseapp.com",
    databaseURL: "https://lucid-formula-302905-default-rtdb.firebaseio.com",
    projectId: "lucid-formula-302905",
    storageBucket: "lucid-formula-302905.appspot.com",
    messagingSenderId: "642060498295",
    appId: "1:642060498295:web:4ef8164ccb82bb448e1d72",
    measurementId: "G-RVN13HZF6D"
  };
  // Initialize Firebase

  //   firebase.analytics();
  const config=firebase.initializeApp(firebaseConfig)
  export const db = config.firestore()
  export const storage = config.storage()
