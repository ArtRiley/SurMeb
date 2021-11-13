/* eslint-disable */

new Swiper ('.main-banner .swiper-container', {
  direction: 'horizontal',
  spaceBetween: 0,
  simulateTouch: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
      delay: 6000,
  },
  // observer: true,
  // observeParents: true,
  threshold: 5,
});