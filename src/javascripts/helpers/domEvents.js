import showPins from '../components/pins';
import { boardPinsInfo, deleteBoardPins } from './data/boardPinData';
import boardInfo from '../components/boardInfo';
import {
  createPin, deletePins, getPins, getSinglePin, updatePin
} from './data/pinData';
import {
  createBoard, getBoards, getSingleBoard, updateBoard
} from './data/boardData';
import { showBoards } from '../components/Boards';
import addBoardForm from '../components/forms/addFormBoard';
import addPinForm from '../components/forms/addPinForm';
import formModal from '../components/forms/formModal';
import editPinForm from '../components/forms/editPinForm';
import editBoardForm from '../components/forms/editBoardForm';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-pin')) {
      console.warn('click');
      const firebaseKey = e.target.id.split('--')[1];
      const boardId = e.target.id.split('--')[2];
      deletePins(firebaseKey, boardId).then((pinsArr) => showPins(pinsArr));
    }

    if (e.target.id.includes('all-boards')) {
      getBoards(uid).then((boardsArray) => showBoards(boardsArray));
    }

    if (e.target.id.includes('all-pins')) {
      getPins(uid).then((pinsArr) => showPins(pinsArr));
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
    if (e.target.id.includes('create-pin-btn')) {
      addPinForm();
    }

    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObj = {
        board_id: document.querySelector('#board').value,
        image: document.querySelector('#pin-image').value,
        description: document.querySelector('#pin-description').value,
        title: document.querySelector('#pin-title').value,
        uid
      };
      createPin(pinObj).then((pinsArr) => showPins(pinsArr));
    }

    if (e.target.id.includes('edit-pin-btn')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      console.warn(firebaseKey);
      formModal('Edit Pin');
      getSinglePin(firebaseKey).then((pinObj) => editPinForm(pinObj));
    }

    if (e.target.id.includes('update-pin-btn')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      const pinObj = {
        board_id: document.querySelector('#board').value,
        image: document.querySelector('#pin-image').value,
        description: document.querySelector('#pin-description').value,
        title: document.querySelector('#pin-title').value,
        uid
      };
      updatePin(firebaseKey, pinObj).then((pinsArr) => showPins(pinsArr));
      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('edit-board')) {
      console.warn('trying to edit board');
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      console.warn(firebaseKey);
      formModal('Edit Board');
      getSingleBoard(firebaseKey).then((boardObj) => editBoardForm(boardObj));
    }

    if (e.target.id.includes('update-board')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      const boardObj = {
        title: document.querySelector('#title-board').value,
        image: document.querySelector('#board-image').value,
        uid
      };
      updateBoard(firebaseKey, boardObj).then((boards) => showBoards(boards));
      debugger;
      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
