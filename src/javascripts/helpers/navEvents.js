import { showBoards } from '../components/Boards';
import showPins from '../components/pins';
import { getPins } from './data/pinData';
import { getBoards, searchBoards } from './data/boardData';

const navEvents = (uid) => {
  document.querySelector('#all-boards').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => showBoards(boardsArray));
  });

  document.querySelector('#all-pins').addEventListener('click', () => {
    getPins(uid).then((pinsArr) => showPins(pinsArr));
  });

  document.querySelector('#search-bar').addEventListener('keyup', (e) => {
    const searchInput = document.querySelector('#search-bar').value.toLowerCase();
    if (e.keyCode === 13) {
      searchBoards(uid, searchInput).then((boards) => showBoards(boards));
      document.querySelector('#search-bar').value = '';
    }
  });
};

export default navEvents;
