import Swiper, { Navigation, Pagination } from 'swiper';


Swiper.use([Navigation, Pagination]);

import './swiper.css';

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 16,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    320: {

    },
    320: {
      loop: false,
      centeredSlides: false,
      spaceBetween: 8,
    },
    769: {
      loop: true,
      centeredSlides: false,
      spaceBetween: 16,
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
