$('.js-burger').click((e) => {
  $(e.currentTarget).toggleClass('is-active');
  $('#menu').toggleClass('is-open');
});
