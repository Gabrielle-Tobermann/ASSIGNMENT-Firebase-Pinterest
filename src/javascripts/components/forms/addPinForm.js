import selectPin from '../selectPin';

const addPinForm = () => {
  document.querySelector('#content-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<form>
  <div class="form-group">
    <label for="pinTitle">Pin Title</label>
    <input type="text" class="form-control" id="pin-title" aria-describedby="pinTitle">
  </div>
  <div class="form-group">
    <label for="pinImage">Image</label>
    <input type="url" class="form-control" id="pin-image">
  </div>
  <div class="form-group">
    <label for="pinDescription">Description</label>
    <input type="text" class="form-control" id="pin-description">
  </div>
  <div class="form-group" id="select-pin">
  </div>
  <button type="submit" class="btn btn-primary" id="submit-pin">Create New Pin</button>
</form>`;

  selectPin();
};

export default addPinForm;
