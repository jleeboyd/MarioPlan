  import firebase from 'firebase/app'; //just import /app not *
  import 'firebase/firestore';
  import 'firebase/auth';

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCL_at7b_SAZAmcc72wmPIYvx75aKyhSJ0",
    authDomain: "jack-marioplan.firebaseapp.com",
    databaseURL: "https://jack-marioplan.firebaseio.com",
    projectId: "jack-marioplan",
    storageBucket: "jack-marioplan.appspot.com",
    messagingSenderId: "385680128650",
    appId: "1:385680128650:web:347a666e0a80c9d3c00b73",
    measurementId: "G-59WP3XXLX6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
