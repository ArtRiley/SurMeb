if ($(window).width() < 1200) {
  $('.js-header-dropdown').click((e) => {
    $(e.currentTarget).closest('.header-menu__item').toggleClass('is-open');
  });
}
