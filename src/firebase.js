  import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBSzbKLC_j_JZ_vu7upl65ZbZSauoBz7p8",
    authDomain: "portfolio1-277319.firebaseapp.com",
    databaseURL: "https://portfolio1-277319.firebaseio.com",
    projectId: "portfolio1-277319",
    storageBucket: "portfolio1-277319.appspot.com",
    messagingSenderId: "235833786665",
    appId: "1:235833786665:web:f423bb074fb94cdbef3738",
    measurementId: "G-H2L5Q8RDVC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;