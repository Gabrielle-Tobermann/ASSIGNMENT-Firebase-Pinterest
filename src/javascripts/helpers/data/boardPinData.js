import { deleteBoard, getSingleBoard } from './boardData';
import { getBoardPins, deletePins } from './pinData';

const boardPinsInfo = (boardId) => new Promise((resolve, reject) => {
  console.warn(boardId);
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);

  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve({ board: boardResponse, boardPins: boardPinsResponse }))
    .catch((error) => reject(error));
});

const deleteBoardPins = (boardId, uid) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArr) => {
    console.warn('board pins arr', boardPinsArr);
    console.warn('board id', boardId);
    const deleteThosePins = boardPinsArr.map((pin) => deletePins(pin.firebaseKey));
    console.warn('delete those pins', deleteThosePins);

    Promise.all(deleteThosePins).then(() => resolve(deleteBoard(boardId, uid)));
  }).catch((error) => reject(error));
});

export { boardPinsInfo, deleteBoardPins };
