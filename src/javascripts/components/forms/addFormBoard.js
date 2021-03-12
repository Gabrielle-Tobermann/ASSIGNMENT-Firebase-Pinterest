const addBoardForm = () => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<form class="m-5">
  <div class="form-group">
    <label for="boardTitle">Board Title</label>
    <input type="text" class="form-control" id="title-board" aria-describedby="boardTitle" required>
  </div>
  <div class="form-group">
    <label for="boardImage">Image</label>
    <input type="url" class="form-control" id="board-image" required>
  </div>
  <button type="submit" class="btn btn-danger rounded-pill" id="submit-board">Create New Board</button>
</form>`;
};

export default addBoardForm;
