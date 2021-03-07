const boardInfo = (boardObj) => {
  document.querySelector('#add-button').innerHTML = `<button class="btn btn-success btn-lg mb-4" id="return-to-boards">Return To My Boards</button><h1>Pins from ${boardObj.title} Board</h1>`;
};

export default boardInfo;
