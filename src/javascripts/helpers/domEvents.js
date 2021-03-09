import showPins from '../components/pins';
import { boardPinsInfo, deleteBoardPins } from './data/boardPinData';
import boardInfo from '../components/boardInfo';
import { deletePins } from './data/pinData';
import { createBoard, getBoards } from './data/boardData';
import { showBoards } from '../components/Boards';
import addBoardForm from '../components/Forms/AddBoardForm';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-pin')) {
      console.warn('click');
      const firebaseKey = e.target.id.split('--')[1];
      const boardId = e.target.id.split('--')[2];
      deletePins(firebaseKey, boardId).then((pinsArr) => showPins(pinsArr));
    }

    if (e.target.id.includes('home')) {
      getBoards(uid).then((boardsArray) => showBoards(boardsArray));
    }

    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteBoardPins(firebaseKey, uid).then((boards) => showBoards(boards));
    }

    if (e.target.id.includes('create-board-btn')) {
      addBoardForm();
    }

    // IF STATEMENT TO GRAB VALUES AND CREATE NEW OBJ
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObj = {
        title: document.querySelector('#title-board').value,
        image: document.querySelector('#board-image').value,
        uid
      };
      createBoard(boardObj).then((boards) => showBoards(boards));
    }

    if (e.target.id.includes('board-title')) {
      const boardId = e.target.id.split('--')[1];
      console.warn(boardId);
      boardPinsInfo(boardId).then((boardInfoObj) => {
        showPins(boardInfoObj.boardPins);
        boardInfo(boardInfoObj.board);
      });
    }
  });
};

export default domEvents;
