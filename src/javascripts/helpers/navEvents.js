import { showBoards } from '../components/Boards';
import showPins from '../components/pins';
import { getPins, searchPins } from './data/pinData';
import { getBoards, searchBoards } from './data/boardData';
// import { searchBoardsandPins } from './data/boardPinData';
// import showSearchedPins from '../components/showSearchedPins';
// import showSearchedBoards from '../components/showSearchedBoards';

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
      searchBoards(uid, searchInput).then((boards) => showBoards(boards));
      searchPins(uid, searchInput).then((pins) => showPins(pins));
      document.querySelector('#search-bar').value = '';
    }
  });
};

export default navEvents;
