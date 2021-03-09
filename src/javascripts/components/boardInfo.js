const boardInfo = (boardObj) => {
  document.querySelector('#add-button').innerHTML = `<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Create</button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#" id="create-board-btn">Board</a><a class="dropdown-item" href="#" id="create-pin-btn">Pin</a></div></div><h1>Pins from ${boardObj.title} Board</h1>`;
};

export default boardInfo;
