import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDE0n3eJiJ675FJiiDPcr2tGO0nSgS3Obk",
    authDomain: "react-catch-of-day-c7d94.firebaseapp.com",
    databaseURL: "https://react-catch-of-day-c7d94.firebaseio.com"
  });

  const base = Rebase.createClass(firebaseApp.database());

  export { firebaseApp };

  export default base;