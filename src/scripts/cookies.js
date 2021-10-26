const baseURL = 'http://localhost:3000';

const getAccessToken = () => {
  return localStorage.getItem('token');
};

const singleCookieRequest = () => {
  const url = `${baseURL}/cookies/set-cookie`;
  const method = 'GET';
  const credentials = 'include';
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };
  fetch(url, {
    method,
    credentials,
    headers,
  });
};

const multipleCookiesRequest = () => {
  const url = `${baseURL}/cookies/set-multiple-cookies`;
  const method = 'GET';
  const credentials = 'include';
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };
  fetch(url, {
    method,
    credentials,
    headers,
  });
};

const setCustomCookie = () => {
  const url = `${baseURL}/cookies/set-custom-cookie`;
  const method = 'GET';
  const credentials = 'include';
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };
  fetch(url, {
    method,
    credentials,
    headers,
  });
};

const deleteCustomCookie = () => {
  const url = `${baseURL}/cookies/delete-custom-cookie`;
  const method = 'GET';
  const credentials = 'include';
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };
  fetch(url, {
    method,
    credentials,
    headers,
  });
};

const deleteAllCookies = () => {
  const url = `${baseURL}/cookies/delete-all-cookies`;
  const method = 'GET';
  const credentials = 'include';
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };
  fetch(url, {
    method,
    credentials,
    headers,
  });
};

const checkCookie = () => {
  const url = `${baseURL}/cookies/check-cookies`;
  const method = 'GET';
  const credentials = 'include';
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };
  fetch(url, {
    method,
    credentials,
    headers,
  });
};

const cookieButton = document.querySelector('.set-cookie');
const multipleCookiesButton = document.querySelector('.set-multiple-cookies');
const customCookieButton = document.querySelector('.set-custom-cookie');
// const deleteCustomCookieButton = document.querySelector(
//   '.delete-custom-cookie'
// );
// const deleteAllCookiesButton = document.querySelector('.delete-all-cookies');
const checkCookiesButton = document.querySelector('.check-cookies');

cookieButton.addEventListener('click', () => {
  singleCookieRequest();
});

multipleCookiesButton.addEventListener('click', () => {
  multipleCookiesRequest();
});

customCookieButton.addEventListener('click', () => {
  setCustomCookie();
});

// deleteCustomCookieButton.addEventListener('click', () => {
//   deleteCustomCookie();
// });

// deleteAllCookiesButton.addEventListener('click', () => {
//   deleteAllCookies();
// });

checkCookiesButton.addEventListener('click', () => {
  checkCookie();
});

export default {};
