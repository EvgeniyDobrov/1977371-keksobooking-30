const SERVER_URL = ' https://30.javascript.pages.academy/keksobooking';

const ServerRoute = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  [Method.GET]: 'Ошибка размещения объявления',
  [Method.POST]: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const request = async (url, method = Method.GET, body = null) => {
  const response = await fetch(url, {method, body});
  if (! response.ok) {
    throw new Error(ErrorText[method]);
  }
  return response.json();
};

async function getForm() {
  return request(SERVER_URL + ServerRoute.GET_DATA);
}

async function sendForm(dateForm) {
  return request(
    SERVER_URL + ServerRoute.SEND_DATA,
    Method.POST,
    dateForm,
  );
}

export { getForm, sendForm};
