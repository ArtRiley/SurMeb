$('.js-job-toggle').click((e) => {
  $(e.currentTarget).toggleClass('is-open');
  $(e.currentTarget).parent().find('.job-item__body').slideToggle();
});
