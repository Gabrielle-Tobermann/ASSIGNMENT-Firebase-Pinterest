import firebase from 'firebase/app';
import 'firebase/auth';
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
      document.querySelector('#content-container').innerHTML = '';
      document.querySelector('#add-button').innerHTML = '';
      loginButton();
      // document.querySelector('#create-board-nav').innerHTML = '';
    }
  });
};

export default checkLoginStatus;
