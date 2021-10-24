const baseURL = 'http://localhost:3000';

const login = () => {
  const url = `${baseURL}/login`;
  const method = 'POST';
  const payload = {
    username: 'user1',
    password: 'password1',
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  fetch(url, {
    method,
    headers,
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user-data', JSON.stringify(data.userData));
    });
};

const checkUserAuthorization = () => {
  const accessToken = localStorage.getItem('access_token');

  if (!accessToken) {
    login();
  }
};

checkUserAuthorization();
