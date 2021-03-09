const addBoardForm = () => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<form>
  <div class="form-group">
    <label for="boardTitle">Board Title</label>
    <input type="text" class="form-control" id="title-board" aria-describedby="boardTitle">
  </div>
  <div class="form-group">
    <label for="boardImage">Image</label>
    <input type="url" class="form-control" id="board-image">
  </div>
  <button type="submit" class="btn btn-primary" id="submit-board">Create New Board</button>
</form>`;
};

export default addBoardForm;
