const adForm = document.querySelector('.ad-form');
const avatarForm = document.querySelector('.ad-form-header');
const adFormElement = document.querySelectorAll('.ad-form__element');

const fitersMaps = document.querySelector('.map__filters');
const houseTypeFilter = document.getElementById('housing-type');
const housePriceFilter = document.getElementById('housing-price');
const houseRoomsFilter = document.getElementById('housing-rooms');
const houseGuestsFilter = document.getElementById('housing-guests');
const houseFeaturesFilter = document.getElementById('housing-features');

const disabledForm = () => {
  adForm.classList.add('ad-form--disabled');
  avatarForm.disabled = true;
  adFormElement.forEach((element) => {
    element.disabled = true;
  });

  fitersMaps.classList.add('ad-form--disabled');
  houseTypeFilter.disabled = true;
  housePriceFilter.disabled = true;
  houseRoomsFilter.disabled = true;
  houseGuestsFilter.disabled = true;
  houseFeaturesFilter.disabled = true;
};

const activForm = () => {
  adForm.classList.remove('ad-form--disabled');
  avatarForm.disabled = false;
  adFormElement.forEach((element) => {
    element.disabled = false;
  });

  fitersMaps.classList.remove('ad-form--disabled');
  houseTypeFilter.disabled = false;
  housePriceFilter.disabled = false;
  houseRoomsFilter.disabled = false;
  houseGuestsFilter.disabled = false;
  houseFeaturesFilter.disabled = false;
};

export { disabledForm, activForm};
