import { showBoards } from '../components/Boards';
import showPins from '../components/pins';
import { getPins } from './data/pinData';
import { getBoards } from './data/boardData';
import { searchBoardsandPins } from './data/boardPinData';

const navEvents = (uid) => {
  document.querySelector('#all-boards').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => showBoards(boardsArray));
  });

  document.querySelector('#all-pins').addEventListener('click', () => {
    getPins(uid).then((pinsArr) => showPins(pinsArr));
  });

  document.querySelector('#search-bar').addEventListener('keyup', (e) => {
    const searchInput = document.querySelector('#search-bar').value.toLowerCase();
    // If the enter key is pressed
    if (e.keyCode === 13) {
      searchBoardsandPins(uid, searchInput).then((pinBoardObj) => {
        console.warn(pinBoardObj);
        showBoards(pinBoardObj.board);
        showPins(pinBoardObj.pin);
        document.querySelector('#search-bar').value = '';
      });
    }
  });
};

export default navEvents;
