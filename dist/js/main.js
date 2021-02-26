
var main_slider = new Swiper('.main-slider', {
   loop:true,
   pagination: {
     el: '.main-slider-pagination',
     clickable: true,
   },

});
var partner_slider = new Swiper('.partner-slider', {
   loop:true,
   slidesPerView: 4,
   spaceBetween: 40,
   navigation: {
      nextEl: '.swiper-button-next-partner',
      prevEl: '.swiper-button-prev-partner',
    },
   breakpoints: {
     320: {
       slidesPerView: 1,
       spaceBetween: 0
     },
     767: {
       slidesPerView: 3,
       spaceBetween: 20
     },
     999: {
       slidesPerView: 4,
       spaceBetween: 20
     },
     1439: {
       slidesPerView: 4,
       spaceBetween: 40
     }
   }
 });

 // Mobile menu
let hamburger = document.querySelector('.hamburger');
let body = document.querySelector('body');
let mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('open');
    body.classList.toggle('mobile-menu-open');
})

let dropdown = document.querySelectorAll(".mobile-menu .icon-drop");
let i;
for (i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener("click", function() {
      this.parentElement.classList.toggle("open");
      let dropdownContent = this.nextElementSibling;

      if (dropdownContent.style.display === "block") {
         dropdownContent.style.display = "none";
      } else {
         dropdownContent.style.display = "block";
      }
   });
}
//

//scroll Top
let timeOut;
function scrollToTop() {
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
        window.scrollBy(0,-50);
        timeOut=setTimeout('scrollToTop()',10);
    }
    else clearTimeout(timeOut);
}