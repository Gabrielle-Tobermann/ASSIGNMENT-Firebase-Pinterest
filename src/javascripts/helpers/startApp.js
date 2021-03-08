import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import { emptyBoards, showBoards } from '../components/Boards';
import { getBoards } from './data/boardData';
import domEvents from './domEvents';

const startApp = (user) => {
  domBuilder(user.uid);
  navBar();
  document.querySelector('#create-board-nav').innerHTML = '<a class="nav-link" href="#" id="create-board-btn">Create Board</a>';
  logoutButton();
  getBoards(user.uid).then((boards) => {
    if (boards.length) {
      showBoards(boards);
    } else {
      emptyBoards();
    }
  });
  domEvents(user.uid);
};

export default startApp;
