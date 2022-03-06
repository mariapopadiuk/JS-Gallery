document.addEventListener('DOMContentLoaded', init, false);

function init() {

  const date = document.querySelector('.year');

  const mainFoto = document.querySelector('.main-foto');
  const img1 = document.querySelector('.image1');
  const img2 = document.querySelector('.image2');
  const img3 = document.querySelector('.image3');

  //Events
  img1.addEventListener('click', () => changeImage(img1.src), false);
  img2.addEventListener('click', () => changeImage(img2.src), false);
  img3.addEventListener('click', () => changeImage(img3.src), false);

  //Fucntions
  function changeImage(imageUrl) {
    //console.log(this);
    mainFoto.src = imageUrl;
  }


  //dynamic date
  date.innerHTML = new Date().getFullYear();
}
