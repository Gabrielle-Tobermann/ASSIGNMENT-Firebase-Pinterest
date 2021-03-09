import firebase from 'firebase/app';
import 'firebase/auth';
import { getBoards } from '../helpers/data/boardData';

const selectBoard = (pinObj = {}) => {
  let domString = `<label for="board">Select a Board</label>
  <select class="form-control" id="board" required>
  <option value="">Select a Board</option>`;

  getBoards(firebase.auth().currentUser.uid).then((boardsArr) => {
    boardsArr.forEach((board) => {
      if (board.firebaseKey === pinObj.board_id) {
        domString += `option selected value="${board.firebaseKey}">${board.title}</option>`;
      } else {
        domString += `<option value="${board.firebaseKey}">${board.title}</option>`;
      }
    });
    domString += '</select>';
    document.querySelector('#select-board').innerHTML = domString;
  });
};

export default selectBoard;
