;let myMap; 

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.751226, 37.616520],
        zoom: 14.02,
        controls: []
    });

    const myPlacemark = new ymaps.Placemark([55.751203, 37.606100], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/map-marker.svg',
        iconImageSize: [58, 73],
        iconImageOffset: [-3, -42]
    });
    
    myMap.geoObjects.add(myPlacemark); 
}

ymaps.ready(init);