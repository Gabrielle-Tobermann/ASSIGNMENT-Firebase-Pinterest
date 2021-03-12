import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBoards = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${boardId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteBoard = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards(userId).then((boards) => resolve(boards)))
    .catch((error) => reject(error));
});

const createBoard = (boardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, boardObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body)
        .then(() => {
          getBoards(firebase.auth().currentUser.uid).then((boards) => resolve(boards));
        });
      console.warn('board fbKey', response.data.name);
    }).catch((error) => reject(error));
});

const updateBoard = (firebaseKey, boardObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/boards/${firebaseKey}.json`, boardObj)
    .then(() => getBoards(firebase.auth().currentUser.uid).then((boards) => resolve(boards)))
    .catch((error) => reject(error));
});

const searchBoards = (userId, searchInput) => new Promise((resolve, reject) => {
  getBoards(userId).then((response) => {
    resolve(response.filter((board) => board.title.toLowerCase().includes(searchInput)));
  }).catch((error) => reject(error));
});

export {
  getBoards, getSingleBoard, deleteBoard, createBoard, updateBoard, searchBoards
};
