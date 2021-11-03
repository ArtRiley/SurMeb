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

$('.compilation-list').each((i, list) => {
  const compilationCards = $(list).find('.compilation-card');

  compilationCards.each((j, card) => {
    const index = j;
    const grids = $(card).closest('.section-compilation__array-item').find('.section-compilation__grid');

    $(card).click((e) => {
      const target = $(e.currentTarget);
      console.log(target);
      grids.removeClass('is-active');
      $(grids[index]).addClass('is-active');
    });
  });
  // compilationCards.click((e) => {
  //   const target = $(e.currentTarget);
  //   const index = target.index();
  //   const grids = target.closest('.section-compilation__array-item')
  // .find('.section-compilation__grid');
  //   console.log(index);
  //   console.log(grids);
  // });
});
