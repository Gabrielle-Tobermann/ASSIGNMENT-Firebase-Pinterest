const navBar = () => {
  const domString = `<id="navBar" nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <i class="fab fa-pinterest fa-lg m-1"></i>
  <a class="navbar-brand" href="#">Pinterest</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link text-dark" href="#"id="home">Home <span class="sr-only">(current)</span></a>
      </li>
      <div id="create-board-nav"></div>
    </ul>
  </div>
</id=nav>`;

  document.querySelector('#navigation').innerHTML = domString;
};

export default navBar;
