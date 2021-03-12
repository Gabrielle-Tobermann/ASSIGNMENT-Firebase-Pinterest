const boardInfo = (boardObj) => {
  document.querySelector('#add-button').innerHTML = `<div class="dropdown"><button class="btn btn-white shadow-none dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+</button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#" id="create-board-btn">Board</a><a class="dropdown-item" href="#" id="create-pin-btn">Pin</a></div></div><h1>Pin for ${boardObj.title} Board</h1>`;
};
export default boardInfo;

// Fix button
