import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      logoutButton();
      document.querySelector('#create-board-nav').innerHTML = '<a class="nav-link" href="#">Create Board</a>';
    } else {
      // person is NOT logged in
      loginButton();
      document.querySelector('#create-board-nav').innerHTML = '';
    }
  });
};

export default checkLoginStatus;
