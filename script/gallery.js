document.addEventListener('DOMContentLoaded', init, false);

function init(){

///Variables
  const btnForest = document.querySelector('.btnForest');
  const btnAnimals = document.querySelector('.btnAnimals');
  const btnViews = document.querySelector('.btnViews');
  const btnLikes = document.querySelector('.btnLikes');
  const btnAll = document.querySelector('.btnAll');


  const sectionImages = document.querySelector('.section-images')
  let data = [];

  //Eventos 
  btnForest.addEventListener('click',() => filterCategories('forest'), false);
  btnAnimals.addEventListener('click',() => filterCategories('animals'), false);
  btnAll.addEventListener('click', showAll, false);

  btnViews.addEventListener('click', sortByViews, false);
  btnLikes.addEventListener('click', sortByLikes, false);
  

  //http://localhost:3000/images/
  fetch('http://localhost:3000/images/')
    .then(response => response.json())
    .then(images => {
      data = images
      images.forEach( img => {
        sectionImages.innerHTML +=`
         <div>
        <img class="gallery-img" src="${img.url}">
        <span>Likes: ${img.likes}</span>
        <span>Views: ${img.views}</span>
      </div>
        `;
      })
    });
 
  //Functions
  function filterCategories(category){
    let filtered = data.filter((img) => img.category === category)
   sectionImages.innerHTML = '';
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

 

















}