const boardInfo = (boardObj) => {
  document.querySelector('#add-button').innerHTML += `<h1>Pins for ${boardObj.title}</h1>`;
};

export default boardInfo;
