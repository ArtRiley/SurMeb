/* eslint-disable */

new Swiper ('.partners-swaiper .swiper-container', {
  direction: 'horizontal',
  spaceBetween: 40,
  centeredSlides: true,
  simulateTouch: true,
  slidesPerView: "auto",
  loop: true,
  // autoplay: {
  //   delay: 6000,
  // },
  // observer: true,
  // observeParents: true,
  threshold: 5,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 8,
    }
  }
});