const showBoards = (arr) => {
  document.querySelector('#pin-container').innerHTML = '';
  document.querySelector('#board-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Create</button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#" id="create-board-btn">Board</a><a class="dropdown-item" href="#" id="create-pin-btn">Pin</a></div></div>';
  arr.forEach((item) => {
    document.querySelector('#board-container').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
    <a href="#"><h5 id="board-title--${item.firebaseKey}" class="card-title">${item.title}</h5></a>
    <button class="btn btn-danger" data-toggle="modal" data-target="#formModal" id="edit-board--${item.firebaseKey}">Edit Board</button>
      <button class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
    </div>
  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#board-container').innerHTML = '<h1>No Items</h1>';
};

export { showBoards, emptyBoards };
