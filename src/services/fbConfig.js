import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBxjIKgByh5vmAaEOuado-cl6fNVD5_Z8w",
  authDomain: "reactfirebasetuts.firebaseapp.com",
  databaseURL: "https://reactfirebasetuts.firebaseio.com",
  projectId: "reactfirebasetuts",
  storageBucket: "reactfirebasetuts.appspot.com",
  messagingSenderId: "815343157559"
};
var firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig;