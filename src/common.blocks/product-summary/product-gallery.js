/* eslint-disable */

var galleryThumbs = new Swiper('.thumbs .swiper-container', {
  threshold: 5,
  spaceBetween: 8,
  slidesPerView: 3,
  // centeredSlides: false,
  slideToClickedSlide: true,
  // centerInsufficientSlides: true,
  loop: false,
  freeMode: false,
  watchSlidesVisibility: true,
  breakpoints: {
    768: {
      spaceBetween: 24,
    }
  }
});

new Swiper ('.swiper-gallery .swiper-container', {
  direction: 'horizontal',
  spaceBetween: 0,
  simulateTouch: true,
  loop: false,
  observer: true,
  observeParents: true,
  threshold: 5,
  thumbs: {
    swiper: galleryThumbs
  },
  // pagination: {
  //   el: '.swiper-gallery .swiper-pagination',
  //   clickable: true
  // },
});

import GLightbox from 'glightbox';

function initGlightboxGallery() {
  GLightbox({
    selector: '.js-glightbox-gallery',
  });
}

window.initGlightboxGallery = initGlightboxGallery;

initGlightboxGallery();
