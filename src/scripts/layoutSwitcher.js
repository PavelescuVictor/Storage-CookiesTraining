const layoutOptions = {
  GRID: 'GRID',
  CAROUSEL: 'CAROUSEL',
};

const layout = {
  [layoutOptions.GRID]: 'grid',
  [layoutOptions.CAROUSEL]: 'carousel',
};

const layoutKey = 'layout';

const layoutSwitcher = document.getElementById('layout-switcher');

export const initializeLayout = () => {
  const layoutOption = localStorage.getItem(layoutKey);
  if (!layoutOption) setLayout(layoutOptions.GRID);
  else setStyles('', layoutOption);
};

const setStyles = (previousOption, layoutOption) => {
  const bookmarksContent = document.querySelector('.bookmarks__content');

  if (!previousOption) bookmarksContent.classList.add(layout[layoutOption]);
  else
    bookmarksContent.classList.replace(
      layout[previousOption],
      layout[layoutOption]
    );

  if (layoutOption === layoutOptions.CAROUSEL) layoutSwitcher.checked = true;
  else layoutSwitcher.unchecked = false;
};

const setLayout = (layoutOption) => {
  const previousOption = localStorage.getItem(layoutKey);
  localStorage.setItem(layoutKey, layoutOption);
  setStyles(previousOption, layoutOption);
};

const toggleLayout = () => {
  const layout = localStorage.getItem(layoutKey);
  if (layout === layoutOptions.GRID) setLayout(layoutOptions.CAROUSEL);
  else setLayout(layoutOptions.GRID);
};

layoutSwitcher.addEventListener('change', toggleLayout);
