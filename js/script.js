const changeBox = document.querySelector('.change-box');
const gallery = document.querySelector('.gallery');
const next = document.querySelector('.next');
const back = document.querySelector('.back');

const numImages = 5;
let counterImages = 0;
let changeBoxHtml = '';
let galleryHtml = '';


for(let i = 1; i <= numImages; i++){
  changeBoxHtml += `
  <img  class="item" src="img/0${i}.jpg" alt="">
  `;
  galleryHtml += `
  <img  class="item-gallery" src="img/0${i}.jpg" alt="">
  `;
}


changeBox.innerHTML = changeBoxHtml;
gallery.innerHTML = galleryHtml;

const listImages = document.getElementsByClassName('item');
const listgallery = document.getElementsByClassName('item-gallery');

listImages[counterImages].classList.add('active');
listgallery[counterImages].classList.add('active');



next.addEventListener('click',function(){
  nextBack(false);
})
back.addEventListener('click',function(){
  nextBack(true);
})

//setto l'intervallo di tempo dando come paramentro la funzione che mi permette di switchare le img tramite i tasti e gli do un parametro timing
let autoImg = setInterval(nextBack, 1500);


function nextBack(isNext){
  listImages[counterImages].classList.remove('active');
  listgallery[counterImages].classList.remove('active');
  if(isNext){
    counterImages--;
    if(counterImages < 0) counterImages = numImages - 1;
  }else{
    counterImages++;
    if(counterImages === numImages) counterImages = 0;
  }
  listImages[counterImages].classList.add('active');
  listgallery[counterImages].classList.add('active');
}

// uso mouseover e mouseout come fosse l'hover del css, passando il cursore sopra impedisco l'autoImg creato.
changeBox.addEventListener('mouseover', function() {
  clearInterval(autoImg);
});

changeBox.addEventListener('mouseout', resume);
function resume() {
  autoImg = setInterval(nextBack, 1500);
};


