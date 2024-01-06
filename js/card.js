const offerType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const cardTemplate = document.querySelector('#card')
  .content.querySelector('.popup');
const containerElement = document.querySelector('#map-canvas');

const createCard = ({ offer, author }) => {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;
  card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = offerType[offer.type];
  card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  card.querySelector('.popup__features').textContent = offer.features;
  card.querySelector('.popup__description').textContent = offer.description;
  card.querySelector('.popup__photos').src = offer.photos;
  card.querySelector('.popup__avatar').src = author;

  return card;
};

const renderCards = (popup) => {
  const fragment = document.createDocumentFragment();
  popup.forEach((offer) => {
    const card = createCard(offer);
    fragment.append(card);
  });
  containerElement.append(fragment);
};
export {renderCards};
