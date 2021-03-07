import { getSingleBoard } from './boardData';
import { getBoardPins } from './pinData';

const boardPinsInfo = (boardId) => new Promise((resolve, reject) => {
  console.warn(boardId);
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);

  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve({ board: boardResponse, boardPins: boardPinsResponse }))
    .catch((error) => reject(error));
});

export default boardPinsInfo;
