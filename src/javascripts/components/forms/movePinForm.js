import selectBoard from '../selectBoard';

const movePinForm = (pinObj) => {
  document.querySelector('#modal-body').innerHTML = `<form id="move-pin-form">
  <div class="form-group" id="select-board">
  </div>
  <button type="submit" class="btn btn-primary" id="update-pin-board">Move pin</button>
</form>`;
  selectBoard(pinObj);
  console.warn('move pin form', pinObj);
};

export default movePinForm;
