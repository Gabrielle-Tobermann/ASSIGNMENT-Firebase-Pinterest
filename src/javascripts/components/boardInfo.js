const boardInfo = (boardObj) => {
  document.querySelector('#add-button').innerHTML += `<h1>Pins from ${boardObj.title} Board</h1>`;
};

export default boardInfo;
