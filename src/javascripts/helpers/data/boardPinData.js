import { deleteBoard, getSingleBoard, searchBoards } from './boardData';
import { getBoardPins, deletePins, searchPins } from './pinData';

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

const searchBoardsandPins = (uid, searchInput) => new Promise((resolve, reject) => {
  const board = searchBoards(uid, searchInput);
  const pin = searchPins(uid, searchInput);
  Promise.all([board, pin]).then(([boardResponse, pinResponse]) => resolve({ board: boardResponse, pin: pinResponse }))
    .catch((error) => reject(error));
});

export { boardPinsInfo, deleteBoardPins, searchBoardsandPins };
