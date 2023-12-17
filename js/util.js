const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomFloat = (min, max) => Math.random() * (max - min + 1) + min;

const getRandomElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomInteger, getRandomElement, getRandomFloat, isEscapeKey };
