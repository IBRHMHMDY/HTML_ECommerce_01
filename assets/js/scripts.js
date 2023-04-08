// ----------------
// Home Page script

// Copy NavHeader Menu to Sidebar Menu for Mobile
function copyToSideMenu(){
   // Copy dpt-cat to departments
   var dptCategory = document.querySelector('.dpt-cat');
   var dptPlace = document.querySelector('.departments');
   dptPlace.innerHTML = dptCategory.innerHTML;
   // Copy header-nav nav to off-canvas nav
   var mainNav = document.querySelector('.header-nav nav');
   var navPlace = document.querySelector('.off-canvas nav');
   navPlace.innerHTML = mainNav.innerHTML;
   // Copy header-top to top-nav
   var headerTop = document.querySelector('.header-top .wrapper');
   var topPlace = document.querySelector('.off-canvas .top-nav');
   topPlace.innerHTML = headerTop.innerHTML;
}
copyToSideMenu();

// Show Mobile Menu
const btnShow = document.querySelector('.trigger'),
      btnClose = document.querySelector('.t-close'),
      addClass = document.querySelector('.site');

btnShow.addEventListener('click', function(){
   addClass.classList.add('showmenu');
});

btnClose.addEventListener('click', function(){
   addClass.classList.remove('showmenu');
});

// Show subMenu on Mobile
const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu)=> menu.addEventListener('click', toggle));

function toggle(e){
   e.preventDefault();
   subMenu.forEach((item)=>item != this? item.closest('.has-child').classList.remove('expand'): null);
   if(this.closest('.has-child').classList != 'expand');
   this.closest('.has-child').classList.toggle('expand')
}

const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
});

// Show Search
const btnOpenSearch = document.querySelector('.t-search'),
      btnCloseSearch = document.querySelector('.search-close'),
      showSearch = document.querySelector('.site');

btnOpenSearch.addEventListener('click', function(){
   showSearch.classList.toggle('showsearch')
})
btnCloseSearch.addEventListener('click', function(){
   showSearch.classList.remove('showsearch')
})

// #Home Page Scripts
// ------------------
// -------------------
// Single Page Scripts
const dptBtn = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');

dptBtn.addEventListener('click', function(){
   dptClass.classList.toggle('showdpt');
})

// Product Image Slider
var productThumb = new Swiper('.small-image', {
   loop: true,
   spaceBetween: 10,
   slidesPerView: 3,
   freeMode: true,
   watchSlidesProgress: true,
   breakpoints: {
      481: {
         spaceBetween: 32,
      }
   }
});

var productBig = new Swiper('.big-image', {
   loop: true,
   autoHeight: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   thumbs: {
      swiper: productThumb,
   }
})

// #Single Page Scripts
// --------------------
// ------------------
// Offer Page Scripts
var stocks = document.querySelectorAll('.products .stock');
for(let x = 0; x < stocks.length; x++){

   let stock = stocks[x].dataset.stock,
   sold = stocks[x].querySelector('.qty-sold').innerHTML,
   percent = sold*100/stock;
   stocks[x].querySelector('.available').style.width = percent + '%';

}
// Offer Page Scripts
// ------------------
// ---------------------
// Modal Scripts
window.onload = function(){
   document.querySelector('.page-home').classList.toggle('showmodal')
}

document.querySelector('.modalclose').addEventListener('click', function(){
   document.querySelector('.page-home').classList.remove('showmodal')
})
document.querySelector('.btn-close').addEventListener('click', function(){
   document.querySelector('.page-home').classList.remove('showmodal')
})






