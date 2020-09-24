// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCRX2uVV4LVUFpFG5jF1NR3tQvpGdA4uGo",
    authDomain: "todo-app-dfb44.firebaseapp.com",
    databaseURL: "https://todo-app-dfb44.firebaseio.com",
    projectId: "todo-app-dfb44",
    storageBucket: "todo-app-dfb44.appspot.com",
    messagingSenderId: "463156403423",
    appId: "1:463156403423:web:bccf5a33b45f18bc3b1d6a",
    measurementId: "G-F9CEXHVW21"
  })
  const db = firebaseApp.firestore();

  export default db;