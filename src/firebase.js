
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAOmd0HoGqkSaT3jT9Oex7_mGG1Z8jKT3o",
    authDomain: "online-shopping-a4c35.firebaseapp.com",
    databaseURL: "https://online-shopping-a4c35.firebaseio.com",
    projectId: "online-shopping-a4c35",
    storageBucket: "online-shopping-a4c35.appspot.com",
    messagingSenderId: "421713948267",
    appId: "1:421713948267:web:227f1f226bfd0a9e580b2e",
    measurementId: "G-YZVR6MJV7N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db,auth}