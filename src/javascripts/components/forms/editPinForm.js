import selectBoard from '../selectBoard';

const editPinForm = (pinObj) => {
  document.querySelector('#modal-body').innerHTML = `<form>
  <div class="form-group">
    <label for="pinTitle">Pin Title</label>
    <input type="text" class="form-control" id="pin-title" aria-describedby="pinTitle" value="${pinObj.title}" required>
  </div>
  <div class="form-group">
    <label for="pinImage">Image</label>
    <input type="url" class="form-control" id="pin-image" value="${pinObj.image}" required>
  </div>
  <div class="form-group">
    <label for="pinDescription">Description</label>
    <input type="text" class="form-control" id="pin-description" value="${pinObj.description}" required>
  </div>
  <div class="form-group" id="select-board" required>
  </div>
  <button type="submit" class="btn btn-primary" id="update-pin-btn--${pinObj.firebaseKey}">Update Pin</button>
</form>`;
  selectBoard(pinObj);
};

export default editPinForm;
