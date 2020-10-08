import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDJEZPxfOwjXdmovwceWzTnP0-l6T396qA",
    authDomain: "sim-ucsc-6b57b.firebaseapp.com",
    databaseURL: "https://sim-ucsc-6b57b.firebaseio.com",
    projectId: "sim-ucsc-6b57b",
    storageBucket: "sim-ucsc-6b57b.appspot.com",
    messagingSenderId:   "1094955910091",
    appId: "1:1094955910091:web:c53474bbc3e17c522eec4e",
    measurementId: "G-SCSMLV2GT0"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage , firebase as default};