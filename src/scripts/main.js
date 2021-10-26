import { checkUserAuthorization } from './authorization.js';
import { initializeMovies } from './movies.js';
import { initializeTheme } from './themeSwitcher.js';
import { initializeLayout } from './layoutSwitcher.js';

import './authorization.js';
import './movies.js';
import './themeSwitcher.js';
import './layoutSwitcher.js';
import './cardScripts.js';
import './cookies.js';
// import './playground.js';

const initializeApp = async () => {
  checkUserAuthorization()
    .then(() => {
      initializeMovies();
      initializeTheme();
      initializeLayout();
    })
    .catch((error) => {
      console.log(error);
    });
};

initializeApp();
