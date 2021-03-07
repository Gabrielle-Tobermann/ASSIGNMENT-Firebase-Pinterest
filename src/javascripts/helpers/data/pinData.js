import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPins = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_id"&equalTo="${boardId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deletePins = (firebaseKey, boardId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getBoardPins(boardId).then((pinsArr) => resolve(pinsArr)))
    .catch((error) => reject(error));
});

export { getPins, getBoardPins, deletePins };
