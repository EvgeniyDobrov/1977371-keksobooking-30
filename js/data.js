import { getRandomInteger, getRandomElement, getRandomFloat } from './util.js';

const COUNT_OFFERS = 10;

const OFFERS_TITLE = [
  'Квартира-студия в центре',
  'Квартира с дизайнерским ремонтом',
  'Уютная квартира в тихом районе',
  'Студия в элитном районе',
  'Комната в пентхаусе',
  'Двушка рядом с метро',
  'Шикарный дом',
  'Аппартаменты в благоустроенном районе с развитой инфроструктурой',
  'Студия с евро ремонтом'
];

const DESCRIPTIONS = [
  'Квартира для семьи из трех человек',
  'Квартира-студия со всеми удобствами',
  'Сдаётся на долгий срок',
  'Комфортная чистая студия для семейной пары',
  '4 больших комнаты для большой семьи',
  'Посуточная аренда студии в центре элитного района',
  'Квартира с евро ремонтом',
  'Аппартаменты в центре города',
  'Квартира с красивым видом и развитой инфраструктурой',
  'Квартира с панорамными окнами и личной террасой'
];

const CHECKIN_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const TYPE_LIST = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const PriceInterval = {
  MIN: 0,
  MAX: 20000
};

const LatInterval = {
  MIN: 35.65000,
  MAX: 35.70000
};

const LngInterval = {
  MIN: 139.70000,
  MAX: 139.80000
};

let currentAvatarId = 1;

const createFeatures = (array) => {
  const count = getRandomInteger(1, array.length - 1);
  const newSet = new Set();
  while(newSet.size < count) {
    newSet.add(getRandomElement(array));
  }

  return Array.from(newSet);
};

const createPhotos = () => Array.from(
  { length: getRandomInteger(1, PHOTOS.length - 1) },
  () => getRandomElement(PHOTOS),
);

const createAuthor = () => ({
  avatar: `img/avatars/user${`${currentAvatarId++}`.padStart(2, '0')}.png`,
});

const createLocation = () => {
  const lat = getRandomFloat(LatInterval.MIN, LatInterval.MAX).toFixed(5);
  const lng = getRandomFloat(LngInterval.MIN, LngInterval.MAX).toFixed(5);

  return `${lat}, ${lng}`;
};

const createOffer = () => ({
  title: getRandomElement(OFFERS_TITLE),
  address: createLocation(),
  price: getRandomInteger(PriceInterval.MIN, PriceInterval.MAX),
  type: getRandomElement(TYPE_LIST),
  rooms: getRandomInteger(1,5),
  guests: getRandomInteger(1,10),
  checkin: getRandomElement(CHECKIN_TIME),
  checkout: getRandomElement(CHECKIN_TIME),
  features: createFeatures(FEATURES),
  description: getRandomElement(DESCRIPTIONS),
  photos: createPhotos()
});

const createRandomAd = () => ({
  author: createAuthor(),
  offer: createOffer(),
  location: createLocation()
});

const getObjects = () => Array.from(
  { length: COUNT_OFFERS },
  (_, offerIndex) => createRandomAd(offerIndex + 1),
);

export { getObjects };
