import { Router, CookieOptions } from 'express';

import { jwtAuth } from '../middlewares/jwtAuth';

const cookiesRoute = Router();

cookiesRoute.use(jwtAuth);

const cookieSettings: CookieOptions = {
  secure: true,
  sameSite: 'none',
  httpOnly: false,
};

cookiesRoute.get('/set-cookie', (req, res) => {
  res.cookie('example-cookie', 'Data comming with the cookie', cookieSettings);

  res.header('Content-Type', 'text/plain');
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  res.header('Access-Control-Allow-Credentials', 'true');

  res.send('Cookie has been created and sent succesfully!');
});

cookiesRoute.get('/set-multiple-cookies', (req, res) => {
  res.cookie(
    'fist-cookie',
    'Data comming with the first cookie',
    cookieSettings
  );
  res.cookie(
    'second-cookie',
    'Data comming with the second cookie',
    cookieSettings
  );

  res.header('Content-Type', 'text/plain');
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  res.header('Access-Control-Allow-Credentials', 'true');

  res.send('Both cookies have been created and sent succesfully!');
});

cookiesRoute.get('/set-custom-cookie', (req, res) => {
  res.cookie('custom-cookie', 'Data comming with the custom cookie', {
    maxAge: 5000,
    expires: new Date('01 12 2021'),
    ...cookieSettings,
  });

  res.header('Content-Type', 'text/plain');
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  res.header('Access-Control-Allow-Credentials', 'true');

  res.send('Custom Cookie have been saved succesfully');
});

cookiesRoute.get('/delete-custom-cookie', (req, res) => {
  res.clearCookie('custom-cookie');
  res.send('Custom Cookie has been deleted succesfully');
});

cookiesRoute.get('/delete-all-cookies', (req, res) => {
  const clearOptions = {
    ...cookieSettings,
  };
  res.clearCookie('example-cookie', clearOptions);
  res.clearCookie('first-cookie', clearOptions);
  res.clearCookie('second--cookie', clearOptions);
  res.clearCookie('custom-cookie', clearOptions);

  res.header('Content-Type', 'text/plain');
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  res.header('Access-Control-Allow-Credentials', 'true');

  res.send('All cookies have been deleted succesfully');
});

cookiesRoute.get('/check-cookies', (req, res) => {
  // Using Cookie Parser
  res.send({
    message: 'Cookies received',
    payload: req.cookies,
    fullCookie: req.headers.cookie,
  });

  // // Using normal way
  // res.send(`The cookies received from the server: ${req.headers.cookie}`);
});

export default cookiesRoute;
