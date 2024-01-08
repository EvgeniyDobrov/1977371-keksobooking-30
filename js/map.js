import { TITLES } from './data.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 16;
const iconConfig = {
  url: './img/main-pin.svg',
  width: 52,
  height: 52,
  anchorX: 26,
  anchorY: 52,
};

const startCoordinate = {
  lat: 59.96831,
  lng: 30.31748,
};

const map = L.map('map').setView(startCoordinate, ZOOM);

L.tileLayer(TILE_LAYER, {
  attribution: COPYRIGHT
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: iconConfig.url,
  iconSize: [iconConfig.width, iconConfig.height],
  iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
});

const mainPinMarker = L.marker(startCoordinate, {
  draggable: true,
  icon: mainPinIcon,
});

mainPinMarker.addTo(map);

const points = [
  {
    title: TITLES,
    lat: 59.96925,
    lng: 30.31730,
  },
  {
    title: TITLES,
    lat: 59.96783,
    lng: 30.31258,
  },
  {
    title: TITLES,
    lat: 59.95958,
    lng: 30.30228,
  },
  {
    title: TITLES,
    lat: 59.97292,
    lng: 30.31982,
  },
];

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__title').textContent = point.title;
  popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return popupElement;
};

points.forEach((point) => {
  const {lat, lng} = point;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
    },
  );

  marker
    .addTo(map)
    .bindPopup(createCustomPopup(point));
});
