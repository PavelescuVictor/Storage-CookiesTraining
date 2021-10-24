const movies = [
  {
    title: 'Dune',
    image: 'assets/Dune.jpg',
    isTrending: true,
  },
  {
    title: 'Interstellar',
    image: 'assets/Interstellar.jpg',
    isTrending: false,
    isUnread: true,
  },
  {
    title: 'Goodfellas',
    image: 'assets/Goodfellas.jpg',
    isTrending: true,
  },
  {
    title: 'Inception',
    image: 'assets/Inception.jpg',
    isTrending: false,
    isUnread: true,
  },
  {
    title: 'Godfather Part 1',
    image: 'assets/Godfather_1.jpg',
    isTrending: true,
  },
  {
    title: 'Jocker',
    image: 'assets/Jocker.jpg',
    isTrending: true,
  },
  {
    title: 'Matrix',
    image: 'assets/Matrix.jpg',
    isTrending: false,
    isUnread: true,
  },
  {
    title: 'Godfather Part 2',
    image: 'assets/Godfather_2.jpg',
    isTrending: false,
  },
];

const getAccessToken = () => {
  return localStorage.getItem('token');
};

const initializeMovies = () => {
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
      console.log(data);
    });
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
  cardImage.setAttribute('src', movie.image);

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

initializeMovies();
