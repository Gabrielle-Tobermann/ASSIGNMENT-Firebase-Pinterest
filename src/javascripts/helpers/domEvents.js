import showPins from '../components/pins';
import boardPinsInfo from './data/boardPinData';
import boardInfo from '../components/boardInfo';
// import { getBoards } from './data/boardData';
// import { showBoards, emptyBoards } from '../components/Boards';

// will need to add uid as param
const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('board-title')) {
      console.warn('click');
      const boardId = e.target.id.split('--')[1];
      console.warn(boardId);
      boardPinsInfo(boardId).then((boardInfoObj) => {
        showPins(boardInfoObj.boardPins);
        boardInfo(boardInfoObj.board);
      });
    }

    if (e.target.id.includes('return-to-boards')) {
      
    }

    if (e.target.id.includes('delete-board')) {
      console.warn('click');
    }
  });
};

export default domEvents;
