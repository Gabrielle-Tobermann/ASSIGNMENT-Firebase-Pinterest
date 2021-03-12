const showPins = (arr) => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<div class="dropdown"><button class="btn btn-white shadow-none dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+</button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#" id="create-board-btn">Board</a><a class="dropdown-item" href="#" id="create-pin-btn">Pin</a></div></div>';
  arr.forEach((item) => {
    document.querySelector('#content-container').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" style="height: 211px;"class="card-img-top rounded" alt="${item.title}">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}</p>
      <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}">Edit Pin</button>
      <button class="btn btn-danger" id="delete-pin--${item.firebaseKey}--${item.board_id}">Delete Pin</button>
    </div>
  </div>`;
  });
};

export default showPins;
