import pinterestOne from './images/pinterestOne.jpg';
import pinterestTwo from './images/pinterestTwo.jpg';
import pinterestThree from './images/pinterestThree.png';
import pinterestFour from './images/pinterestFour.jpg';
import pinterestFive from './images/pinterestFive.jpg';
import pinterestSix from './images/pinterestSix.jpg';

const home = () => {
  document.querySelector('#navigation').innerHTML = '<div class="justify-content-lg-start m-2" style="width: fit-content"><i class="fab fa-pinterest fa-lg m-1 text-danger"></i><a class="navbar-brand text-danger" href="#">Pinterest</a></div>';
  document.querySelector('#app').innerHTML = `<h1 id="homeh1">Get your Next</h1><h2 class="mb-5" style="color: #01660F" id="homeh2">Home Decor Ideas</h2>
  <div class="d-flex flex-wrap justify-content-center"><div class="card m-3 border-0" style="width: 18rem;">
  <img src="${pinterestOne}" class="card-img-top rounded" alt="home decor">
</div><div class="card mx-3 mb-5 border-0" style="width: 18rem;">
<img src="${pinterestTwo}" class="card-img-top rounded" alt="home decor">
</div><div class="card m-3 border-0" style="width: 18rem;">
<img src="${pinterestThree}" class="card-img-top rounded" alt="home decor">
</div><div class="card mx-3 border-0" style="width: 18rem;">
<img src="${pinterestFour}" class="card-img-top rounded" alt="home decor">
</div><div class="card mx-3 mb-5 border-0" style="width: 18rem;">
<img src="${pinterestFive}" class="card-img-top rounded" alt="home decor">
</div><div class="card mx-3 mb-5 border-0" style="width: 18rem;">
<img src="${pinterestSix}" class="card-img-top rounded" alt="home decor">
</div></div>`;
};

export default home;
