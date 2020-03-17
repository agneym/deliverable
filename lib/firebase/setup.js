import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1_OOk4nTghv9YnSD7ID8T5f370Tno-L8",
  authDomain: "ochha-2474d.firebaseapp.com",
  databaseURL: "https://ochha-2474d.firebaseio.com",
  projectId: "ochha-2474d",
  storageBucket: "ochha-2474d.appspot.com",
  messagingSenderId: "106971139327",
  appId: "1:106971139327:web:b1b1f5939f7459a7a110ca",
  measurementId: "G-K9W9P0HKC7",
};

// Initialize Firebase
function setup() {
  firebase.initializeApp(firebaseConfig);
}

export default setup;
