const editBoardForm = (boardObj) => {
  document.querySelector('#modal-body').innerHTML = `<form>
  <div class="form-group">
    <label for="boardTitle">Board Title</label>
    <input type="text" class="form-control" id="title-board" aria-describedby="boardTitle" value="${boardObj.title}">
  </div>
  <div class="form-group">
    <label for="boardImage">Image</label>
    <input type="url" class="form-control" id="board-image" value="${boardObj.image}">
  </div>
  <button type="submit" class="btn btn-primary" id="update-board--${boardObj.firebaseKey}">Update Board</button>
</form>`;
};

export default editBoardForm;
