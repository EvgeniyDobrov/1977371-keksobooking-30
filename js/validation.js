const adForm = document.querySelector('.ad-form');
const titleAnnouncement = document.getElementById('title');
const typeForm = document.getElementById('type');
const typePrice = document.getElementById('price');

let MIN_PRICE = 0;
const MAX_PRICE = 100000;

typeForm.addEventListener('change', () => {
  if (typeForm.value === 'bungalow') {
    MIN_PRICE = 0;
    typePrice.placeholder = '0';
  } else if
  (typeForm.value === 'flat') {
    MIN_PRICE = 1000;
    typePrice.placeholder = '1000';
  } else if
  (typeForm.value === 'hotel') {
    MIN_PRICE = 3000;
    typePrice.placeholder = '3000';
  } else if
  (typeForm.value === 'house') {
    MIN_PRICE = 5000;
    typePrice.placeholder = '5000';
  } else if
  (typeForm.value === 'palace') {
    MIN_PRICE = 10000;
    typePrice.placeholder = '10000';
  }
});

const timeIn = document.getElementById('timein');
const timeOut = document.getElementById('timeout');

timeIn.addEventListener('change', () => {
  if (timeIn.value === '12:00') {
    timeOut.value = '12:00';
  } else if
  (timeIn.value === '13:00') {
    timeOut.value = '13:00';
  } else if
  (timeIn.value === '14:00') {
    timeOut.value = '14:00';
  }
});

timeOut.addEventListener('change', () => {
  if (timeOut.value === '12:00') {
    timeIn.value = '12:00';
  } else if
  (timeOut.value === '13:00') {
    timeIn.value = '13:00';
  } else if
  (timeOut.value === '14:00') {
    timeIn.value = '14:00';
  }
});

const roomNumber = document.getElementById('room_number');
const guestsNumber = document.getElementById('capacity');

const roomsValidate = () => {
  if (roomNumber.value === '1') {
    guestsNumber.value = '1';
    return true;
  } if
  (roomNumber.value === '2') {
    if (guestsNumber.value === '2' || guestsNumber.value === '1'){
      return true;
    }
  } if
  (roomNumber.value === '3') {
    if (guestsNumber.value === '3' || guestsNumber.value === '2' || guestsNumber.value === '1') {
      return true;
    }
  } if
  (roomNumber.value === '100') {
    guestsNumber.value = '0';
    return true;
  }
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'notice--error'
});

const titleOfferValidate = () => {
  if (titleAnnouncement.value.length >= 30 && titleAnnouncement.value.length < 100) {
    return true;
  }
};

const priceOfferValidate = () => {
  if (typePrice.value <= MAX_PRICE && typePrice.value >= MIN_PRICE) {
    return true;
  }
};

pristine.addValidator(
  titleAnnouncement,
  titleOfferValidate,
  'Введите корректный заголовок'
);

pristine.addValidator(
  typePrice,
  priceOfferValidate,
  'Введите корректную цену'
);

pristine.addValidator(
  guestsNumber,
  roomsValidate,
  'Введите корректное количество комнат или гостей'
);

adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
