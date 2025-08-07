// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/style.css';
import '../styles/normalize.css';

const swiper = new Swiper('.swiper', {
  /*loop: true, /*musi byt false, protoze jinak se 2. obrazek nerenderuje ihned po nacteni stranky. coz je velka designova chyba. Takze objetuji looping a nechavam si centeredSlides*/
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: 1,
  watchSlidesProgress: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
