import showPins from '../components/pins';
import boardPinsInfo from './data/boardPinData';
import boardInfo from '../components/boardInfo';

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

    if (e.target.id.includes('delete-board')) {
      console.warn('click');
    }
  });
};

export default domEvents;
