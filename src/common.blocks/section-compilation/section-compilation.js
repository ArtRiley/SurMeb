const catalogTabs = $('.catalog-nav__item');
const catalogCompilations = $('.section-compilation__array-item');

catalogTabs.click((e) => {
  catalogTabs.removeClass('is-active');
  const target = $(e.currentTarget);
  const index = target.index();
  target.addClass('is-active');
  catalogCompilations.removeClass('is-active');
  catalogCompilations.eq(index).addClass('is-active');
});
