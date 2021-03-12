import firebase from 'firebase/app';
import 'firebase/auth';
import home from '../components/home';
import loginButton from '../components/loginButton';
import firebaseConfig from './apiKeys';
import startApp from './startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      home();
      loginButton();
    }
  });
};

export default checkLoginStatus;
