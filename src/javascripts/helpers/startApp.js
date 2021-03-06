import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import { emptyBoards, showBoards } from '../components/showBoards';
import getBoards from './data/boardData';

const startApp = (user) => {
  domBuilder(user.uid);
  navBar();
  document.querySelector('#create-board-nav').innerHTML = '<a class="nav-link" href="#">Create Board</a>';
  logoutButton();
  getBoards(user.uid).then((boards) => {
    if (boards.length) {
      showBoards(boards);
    } else {
      emptyBoards();
    }
  });
};

export default startApp;
