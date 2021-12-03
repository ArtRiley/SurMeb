$('.js-close-popup').click((e) => {
  $(e.target).closest('.popup-frame').removeClass('is-open');
  $('html').removeClass('scroll-hide');
  $('body').css('padding-right', 'unset');
  $('header').css('padding-right', 'unset');
});

// const popupList = $('.popup');
// const popupAreaList = $('.js-popup-area');
const popupFrameList = $('.popup-frame');
const openPopup = $('.js-open-popup');

openPopup.click((e) => {
  console.log($(window).outerWidth());
  console.log($('main').width());
  const scrollSize = $(window).outerWidth() - $('main').width();
  // console.log(scrollSize);
  $('body').css('padding-right', scrollSize);
  $('header').css('padding-right', scrollSize);
  const target = $(e.currentTarget);
  $('html').addClass('scroll-hide');
  popupFrameList.removeClass('is-open');
  const targetPopup = target.attr('data-target-popup');
  $(`#${targetPopup}`).addClass('is-open');
});

function closeAllPopup() {
  if (popupFrameList.hasClass('is-open')) {
    $('body').css('padding-right', 'unset');
    $('header').css('padding-right', 'unset');
    $('html').removeClass('scroll-hide');
  }
  popupFrameList.removeClass('is-open');
}

$(document).mouseup((e) => {
  // if (!popupAreaList.is(e.target) && popupAreaList.has(e.target).length === 0) {
  if ($('.popup-frame').is(e.target)) {
    closeAllPopup();
  }
});
