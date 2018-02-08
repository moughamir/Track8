import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDBxSjgRe6bbStJe52p77MIFBGIX1XajmA",
  authDomain: "track8-nf.firebaseapp.com",
  databaseURL: "https://track8-nf.firebaseio.com",
  projectId: "track8-nf",
  storageBucket: "track8-nf.appspot.com",
  messagingSenderId: "495040376722"
};

const fb = firebase.initializeApp(config);

export default fb;
