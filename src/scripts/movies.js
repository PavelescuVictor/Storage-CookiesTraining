let movies;

const baseURL = 'http://localhost:3000';
const relativePathToAssets = '/assets/';

const getAccessToken = () => {
  return localStorage.getItem('token');
};

const createMovieCard = (movie) => {
  // Paragraph Node
  const titleNode = document.createTextNode(movie.title);
  const paragraphTitle = document.createElement('p');
  paragraphTitle.appendChild(titleNode);
  paragraphTitle.classList.add('card-title');

  // Button Node
  const buttonTextNode = document.createTextNode('Book Ticket');
  const buttonNode = document.createElement('button');
  buttonNode.appendChild(buttonTextNode);
  buttonNode.classList.add('card-button');

  // Card Info Wrapper
  const cardInfoWrapper = document.createElement('div');
  cardInfoWrapper.classList.add('card-info');
  cardInfoWrapper.appendChild(paragraphTitle);
  cardInfoWrapper.appendChild(buttonNode);

  // Card Image
  const cardImage = document.createElement('img');
  cardImage.classList.add('card-image');
  cardImage.setAttribute('alt', movie.title);
  cardImage.setAttribute('src', `${relativePathToAssets}${movie.image}`);

  // Card Wrapper
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card');
  if (movie.isTrending) cardWrapper.classList.add('movie-trending');
  cardWrapper.appendChild(cardImage);
  cardWrapper.appendChild(cardInfoWrapper);

  return cardWrapper;
};

const filterMovies = (queryString) => {
  const moviesWrapper = document.querySelector('.movies__content');
  const filteredResults = movies.filter((movie) => {
    return movie.title.includes(queryString);
  });
  while (moviesWrapper.firstChild)
    moviesWrapper.removeChild(moviesWrapper.firstChild);
  filteredResults.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    moviesWrapper.appendChild(movieCard);
  });
};

const setMovies = () => {
  const moviesWrapper = document.querySelector('.movies__content');
  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    moviesWrapper.appendChild(movieCard);
  });
};

const setBookmarks = () => {
  const bookmarks = JSON.parse(
    localStorage.getItem('user-data')
  ).bookmarkedMovies;
  const bookmarksWrapper = document.querySelector('.bookmarks__content');
  bookmarks.forEach((bookmark) => {
    const movie = movies.find(({ id }) => id === bookmark.id);
    const bookmarkCard = createMovieCard(movie);
    bookmarksWrapper.appendChild(bookmarkCard);
    const bookmarkCard2 = createMovieCard(movie);
    bookmarksWrapper.appendChild(bookmarkCard2);
    const bookmarkCard3 = createMovieCard(movie);
    bookmarksWrapper.appendChild(bookmarkCard3);
  });
};

const resetMovies = () => {
  const moviesWrapper = document.querySelector('.movies__content');
  while (moviesWrapper.firstChild)
    moviesWrapper.removeChild(moviesWrapper.firstChild);
  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    moviesWrapper.appendChild(movieCard);
  });
};

const searchInput = document.getElementById('search-input');

// Event listeners
searchInput.addEventListener('input', (event) => {
  const queryString = event.target.value;
  if (queryString) filterMovies(queryString);
  else resetMovies();
});

export const initializeMovies = () => {
  const url = `${baseURL}/movies`;
  const method = 'GET';
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  };
  fetch(url, {
    method,
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      movies = data;
      setMovies();
      setBookmarks();
    });
};

export default {};
