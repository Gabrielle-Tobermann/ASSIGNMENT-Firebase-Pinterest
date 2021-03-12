const navBar = () => {
  const domString = `<id="navBar" nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <i class="fab fa-pinterest fa-lg m-1"></i>
  <a class="navbar-brand" href="#">Pinterest</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active ml-3">
        <a class="nav-link text-dark" href="#"id="all-boards">Boards <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active ml-3">
      <a class="nav-link text-dark" href="#"id="all-pins">Pins <span class="sr-only">(current)</span></a>
    </li>
    </ul>
    <form class="form-inline w-75 pl-0 ml-5" id="search-container">
    <div class="bg-light border border-light rounded-pill w-100">
    <i class="fas fa-search m-2 text-secondary p-1 justify-content-start" id="search-icon"></i>
    <input class="form-control mr-5 border-0 bg-light shadow-none w-75" type="search" placeholder="Search" aria-label="Search" id="search-bar">
    </div>
  </form>
  </div>
</nav>`;

  document.querySelector('#navigation').innerHTML = domString;
};

export default navBar;
