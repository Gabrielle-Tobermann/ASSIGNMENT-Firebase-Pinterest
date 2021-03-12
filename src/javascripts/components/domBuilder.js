const domBuilder = () => {
  document.querySelector('#top-container').innerHTML = '<div id="login-form-container"></div><div id="navigation"></div>';
  document.querySelector('#app').innerHTML = `<div id="main-container">
  <div id="add-button"></div>
  <div id="form-container"></div>
  <div id="content-container" class="d-flex flex-wrap justify-content-around mx-5"></div>`;
};

export default domBuilder;
