// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAV58EchvQd8fuvlEcKZvlWyTKSTGLoobk",
    authDomain: "yt-9ec8d.firebaseapp.com",
    projectId: "yt-9ec8d",
    storageBucket: "yt-9ec8d.appspot.com",
    messagingSenderId: "748659610600",
    appId: "1:748659610600:web:c6fd43fc50240cab6eca5d",
    measurementId: "G-6Q879RL51V"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
 
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {db , auth , provider };

  export default firebase


