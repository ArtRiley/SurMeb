const addressList = $('.address-item');

addressList.click((e) => {
  const target = $(e.currentTarget);
  addressList.removeClass('is-active');
  target.addClass('is-active');
});

function init() {
  const markerOptions = {
    iconColor: '#FF0000',
    preset: 'search#placemark',
    iconImageSize: [32, 50],
    iconImageOffset: [-16, -50],
  };
  const markersArr = [];
  for (let i = 0; i < addressList.length; i++) {
    const currLi = addressList.eq(i);

    const currArr = [];
    currArr.push(currLi.attr('data-value'));

    const currCoords = [];
    currCoords.push(parseFloat(currLi.attr('data-x')));
    currCoords.push(parseFloat(currLi.attr('data-y')));
    currArr.push(currCoords);

    const currAddress =
      `${currLi.find('.address-item__head').text()}, ${
        currLi.find('.address-item__phone').text()}</b> <br/>${
        currLi.find('.address-item__schedule').text()}`;
    currArr.push(currAddress);

    markersArr.push(currArr);
  }
  const myMap = new ymaps.Map('contacts-map', {
    center: [53.19941151609159, 45.02078206878663],
    zoom: 13,
    controls: [],
  }, {
    searchControlProvider: 'yandex#search',
  });
  const markersCollection = new ymaps.GeoObjectCollection(null);

  for (let i = 0; i < markersArr.length; i++) {
    markersCollection.add(new ymaps.Placemark(markersArr[i][1], {
      balloonContent: markersArr[i][2],
    }, markerOptions));
  }
  myMap.geoObjects.add(markersCollection);

  myMap.behaviors.disable('scrollZoom');
  myMap.controls.add('zoomControl', {
    position: {
      top: 130,
      left: 10,
    },
  });
  addressList.click((e) => {
    const id = $(e.currentTarget).attr('data-value');
    let coords;
    /*eslint-disable*/
    for (let i = 0; i < markersArr.length; i++) {
      if (markersArr[i][0] === id) {
        coords = markersArr[i][1];
      }
    }
    myMap.panTo(coords, {
      flying: 1
    });
  });
}

if ($('div').is('#contacts-map')) {
  ymaps.ready(init);
}
