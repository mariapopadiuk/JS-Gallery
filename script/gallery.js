document.addEventListener('DOMContentLoaded', init, false);

function init() {

  ///Variables
  const date = document.querySelector('.year');

  const btnForest = document.querySelector('.btnForest');
  const btnAnimals = document.querySelector('.btnAnimals');
  const btnViews = document.querySelector('.btnViews');
  const btnLikes = document.querySelector('.btnLikes');
  const btnAll = document.querySelector('.btnAll');
  const wrapper = document.querySelector('.wrapper');
  const mybutton = document.getElementById("myBtn");
  const sectionImages = document.querySelector('.section-images')
  let data = []; //db with global scope

  //Events
  btnForest.addEventListener('click', () => filterCategories('forest'), false);
  btnAnimals.addEventListener('click', () => filterCategories('animals'), false);
  btnAll.addEventListener('click', showAll, false);

  btnViews.addEventListener('click', sortByViews, false);
  btnLikes.addEventListener('click', sortByLikes, false);

  //Bitton to top
  mybutton.addEventListener('click',topFunction,false)


  //http://localhost:3000/images/ if dev
  //https://622f548d3ff58f023c1d627a.mockapi.io/api/images/images/ if prod
  const prodUrl = 'https://622f548d3ff58f023c1d627a.mockapi.io/api/images/images/'
  const devUrl = 'http://localhost:3000/images/'

  fetch(prodUrl)   ///fetch data from mockAPI
    .then(bd => bd.json())   ///parse to json
    .then(images => {        ///bd
      data = images
      //imagesLoader.style.display = 'none'
      images.forEach(img => {
        sectionImages.innerHTML += `
         <div>
        <img class="gallery-img" src="${img.url}">
        <span>Likes: ${img.likes}</span>
        <span>Views: ${img.views}</span>
      </div>
        `; 
      })
      
    });

  //Functions
  function filterCategories(category) {
    let filtered = data.filter((img) => img.category === category)
    sectionImages.innerHTML = ''; //para nao duplicar img
    filtered.forEach(img => {
      sectionImages.innerHTML += `
      <div>
        <img class="gallery-img" src="${img.url}">
        <span>Likes: ${img.likes}</span>
        <span>Views: ${img.views}</span>
      </div>
        `;
    });
  }

  function showAll() {
    sectionImages.innerHTML = '';
    data.forEach(img => {
      sectionImages.innerHTML += `
        <div>
        <img class="gallery-img" src="${img.url}">
        <span>Likes: ${img.likes}</span>
        <span>Views: ${img.views}</span>
      </div>
        `;
    });
  }

  function sortByViews() {
    data.sort((a, b) => b.views - a.views);
    sectionImages.innerHTML = '';
    data.forEach(img => {
      sectionImages.innerHTML += `
        <div>
        <img class="gallery-img" src="${img.url}">
        <span>Likes: ${img.likes}</span>
        <span>Views: ${img.views}</span>
      </div>
        `;
    });
  }

  function sortByLikes() {
    data.sort((a, b) => b.likes - a.likes);
    sectionImages.innerHTML = '';
    data.forEach(img => {
      sectionImages.innerHTML += `
        <div>
        <img class="gallery-img" src="${img.url}">
        <span>Likes: ${img.likes}</span>
        <span>Views: ${img.views}</span>
      </div>
        `;
    });
  }
  //function for Buttun to TOP
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  //End Button to TOP


  sectionImages.addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-img')) {
      wrapper.classList.add('layout')
      wrapper.innerHTML = `<div class="full-sizeImg-wrapper"><img class="fullSize" src="${e.target.src}" alt=""/></div>`
    }
 
  })


  wrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('full-sizeImg-wrapper')) {
      wrapper.classList.remove('layout')
      e.target.remove()
    }
  })

  //dynamic date
  date.innerHTML = new Date().getFullYear();
}


//   Descri????o de projeto
//
//   Cada bot??o no navbar tem um evento ???click??? com fun????o callback que chama sua fun????o.
//
//       Estou usar m??todo fetch para buscar o BD que encontra-se num ficheiro .json.
//
//       Uso json server para arrancar servidor local.
//
//       Com m??todo forEach fa??o itera????o de objetos que est??o na BD para renderizar os na pagina.
//       Na cada itera????o desenho um div com imgem, likes, views.
//
//       Fun????o filterCategory :
//       - recebe um  argumento ???category???
//   - o primeiro passo filtra array ???data??? anteriormente definido com todas imagens baseado no par??metro passado para fun????o (pode ser ???animal??? ou ???forest???)
//   - segundo passo ?? limpar o section-img para prevenir duplica????o de imagens
//   - terceiro passo ?? iterar  array filtrado e desenhar div com imgens, likes e views
//
//
//   Fun????o showAll :
//   - Primeiro passo ?? limpar section-img
//   - Estou usar m??todo fetch para iterar cada img
//   - Terceiro Desenhar div com img, likes,views


//Mock API
/* 
Localmente para desenvolvimento usei json server como BD
Na producao (github pages) usei mock API como BD
*/
