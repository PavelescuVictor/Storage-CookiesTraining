const themesOptions = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

const themes = {
  [themesOptions.LIGHT]: {
    backgroundMain: '#ffffff',
    main: '#000000',
    accent: '#de411b',
  },
  [themesOptions.DARK]: {
    backgroundMain: '#000000',
    main: '#ffffff',
    accent: '#de411b',
  },
};

const themeKey = 'theme';

const themeSwitcher = document.getElementById('theme-switcher');

export const initializeTheme = () => {
  const themeOption = localStorage.getItem(themeKey);
  if (!themeOption) setTheme(themesOptions.LIGHT);
  else setStyles(themeOption);
};

const setStyles = (themeOption) => {
  const root = document.documentElement;

  root.style.setProperty(
    '--color-background-main',
    themes[themeOption].backgroundMain
  );

  root.style.setProperty('--color-main', themes[themeOption].main);

  root.style.setProperty('--color-accent', themes[themeOption].accent);

  if (themeOption === themesOptions.DARK) themeSwitcher.checked = true;
  else themeSwitcher.unchecked = false;
};

const setTheme = (themeOption) => {
  localStorage.setItem(themeKey, themeOption);
  setStyles(themeOption);
};

const toggleTheme = () => {
  const theme = localStorage.getItem(themeKey);
  if (theme === themesOptions.LIGHT) setTheme(themesOptions.DARK);
  else setTheme(themesOptions.LIGHT);
};

themeSwitcher.addEventListener('change', toggleTheme);
