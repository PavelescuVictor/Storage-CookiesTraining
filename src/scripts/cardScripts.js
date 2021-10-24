const moviesWrapper = document.querySelector('.movies');
moviesWrapper.addEventListener('click', (event) => {
  const movie = event.target.parentNode;
  if (movie.classList.contains('unread'))
    movie.classList.replace('unread', 'read');
});
