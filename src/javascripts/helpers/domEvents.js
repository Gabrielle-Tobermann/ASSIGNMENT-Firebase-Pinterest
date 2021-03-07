import showPins from '../components/pins';
import { boardPinsInfo, deleteBoardPins } from './data/boardPinData';
import boardInfo from '../components/boardInfo';
import { deletePins } from './data/pinData';
import { getBoards } from './data/boardData';
import { showBoards } from '../components/Boards';
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

    if (e.target.id.includes('delete-pin')) {
      console.warn('click');
      const firebaseKey = e.target.id.split('--')[1];
      const boardId = e.target.id.split('--')[2];
      deletePins(firebaseKey, boardId).then((pinsArr) => showPins(pinsArr));
    }

    if (e.target.id.includes('return-to-boards')) {
      getBoards(uid).then((boardsArray) => showBoards(boardsArray));
    }

    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteBoardPins(firebaseKey, uid).then((boards) => showBoards(boards));
    }
  });
};

export default domEvents;
