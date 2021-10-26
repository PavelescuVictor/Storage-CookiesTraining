const baseURL = 'http://localhost:3000';

const login = async () => {
  const url = `${baseURL}/login`;
  const method = 'POST';
  const payload = {
    username: 'user2',
    password: 'password2',
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(payload),
  });
  const results = await response.json();

  localStorage.setItem('token', results.token);
  localStorage.setItem('user-data', JSON.stringify(results.userData));
};

export const checkUserAuthorization = () => {
  return new Promise((resolve, reject) => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        login();
      }
      resolve();
    } catch {
      reject('Some error occured during authorization process.');
    }
  });
};

export default {};
