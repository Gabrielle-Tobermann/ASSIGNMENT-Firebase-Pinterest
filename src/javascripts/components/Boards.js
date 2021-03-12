const showBoards = (arr) => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<div class="dropdown"><button class="btn btn-white shadow-none dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+</button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#" id="create-board-btn">Board</a><a class="dropdown-item" href="#" id="create-pin-btn">Pin</a></div></div>';
  arr.forEach((item) => {
    document.querySelector('#content-container').innerHTML += `<div class="card mx-5 border-0" style="width: 18rem;">
    <img src="${item.image}" style="height: 360px"class="card-img-top rounded" alt="${item.title}">
    <div class="card-body">
    <a href="#"><h5 class="text-dark font-weight-bold" id="board-title--${item.firebaseKey}" class="card-title">${item.title}</h5></a>
    <button class="btn btn-outline-dark rounded-pill" data-toggle="modal" data-target="#formModal" id="edit-board--${item.firebaseKey}">Edit Board</button>
      <button class="btn btn-outline-dark rounded-pill" id="delete-board--${item.firebaseKey}">Delete Board</button>
    </div>
  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#board-container').innerHTML = '<h1>No Items</h1>';
};

export { showBoards, emptyBoards };
