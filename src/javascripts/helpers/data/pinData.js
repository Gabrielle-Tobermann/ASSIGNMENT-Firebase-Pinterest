import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPins = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
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

const createPin = (pinObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then(() => {
          getPins(firebase.auth().currentUser.uid).then((pinsArr) => resolve(pinsArr));
        });
      console.warn('fbKey', response.data.name);
    }).catch((error) => reject(error));
});

const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  console.warn('get single pin');
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updatePin = (firebaseKey, pinObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/pins/${firebaseKey}.json`, pinObj)
    .then(() => getPins(firebase.auth().currentUser.uid).then((pinsArr) => resolve(pinsArr)))
    .catch((error) => reject(error));
});

const searchPins = (userId, searchInput) => new Promise((resolve, reject) => {
  getPins(userId).then((pinsArr) => {
    const filterValue = pinsArr.filter((pin) => {
      console.warn(pin);
      let matchesValue = false;
      if (pin.title.toLowerCase() === searchInput) {
        matchesValue = true;
      }
      return matchesValue;
    });
    console.warn(filterValue);
    resolve(filterValue);
  }).catch((error) => reject(error));
});

export {
  getPins, getBoardPins, deletePins, createPin, getSinglePin, updatePin, searchPins
};
