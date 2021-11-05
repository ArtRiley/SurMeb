$('.js-burger').click((e) => {
  const scrollSize = $(window).outerWidth() - $('main').width();
  $('body').css('padding-right', scrollSize);
  $('header').css('padding-right', scrollSize);
  $('html').toggleClass('scroll-hide');
  $(e.currentTarget).toggleClass('is-active');
  $('#menu').toggleClass('is-open');
});
