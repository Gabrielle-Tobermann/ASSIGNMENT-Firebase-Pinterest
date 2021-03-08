const domBuilder = () => {
  document.querySelector('#top-container').innerHTML = '<div id="login-form-container"></div><div id="navigation"></div>';
  document.querySelector('#app').innerHTML = '<div id="main-container"><div id="add-button"></div><div id="form-container"></div><div id="content-container"></div></div>';
};

export default domBuilder;
