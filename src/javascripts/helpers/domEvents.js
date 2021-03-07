import showPins from '../components/pins';
import boardPinsInfo from './data/boardPinData';
import boardInfo from '../components/boardInfo';
// import { deletePins } from './data/pinData';
import { getBoards } from './data/boardData';
import { showBoards } from '../components/Boards';
// import { getBoards } from './data/boardData';
// import { showBoards, emptyBoards } from '../components/Boards';

// will need to add uid as param
const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('board-title')) {
      const boardId = e.target.id.split('--')[1];
      console.warn(boardId);
      boardPinsInfo(boardId).then((boardInfoObj) => {
        showPins(boardInfoObj.boardPins);
        boardInfo(boardInfoObj.board);
      });
    }

    // if (e.target.id.includes('delete-pin')) {
    //   console.warn('click');
    //   if (window.customConfirm('Are you sure you want to delete?')) {
    //     const firebaseKey = e.target.id.split('--')[1];
    //     console.warn(firebaseKey);
    //     deletePins(firebaseKey).then((pin) => console.warn(pin));
    //   }
    // }
    if (e.target.id.includes('return-to-boards')) {
      getBoards(uid).then((boardsArray) => showBoards(boardsArray));
    }

    if (e.target.id.includes('delete-board')) {
      console.warn('click');
    }
  });
};

export default domEvents;
