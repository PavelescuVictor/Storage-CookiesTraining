import { Router } from 'express';

import { jwtAuth } from '../middlewares/jwtAuth';
import { v4 as uuid } from 'uuid';
import fixtures from '../__fixtures__/index';

let { movies } = fixtures.movies;

interface Movie {
  id: number;
  title: string;
  image: string;
}

const moviesRoute = Router();

moviesRoute.use(jwtAuth);

moviesRoute.get<{ id: string }>('/:id?', (req, res) => {
  const { id } = req.params;

  if (id) {
    return res.json(movies.find((movie: any) => movie.id === id) || {});
  }

  return res.json(movies);
});

moviesRoute.get<{ id: string }>('', (req, res) => {
  return res.json(movies);
});

// moviesRoute.post('/', (req, res) => {
//   const { id = uuid(), title, image = false, deadline = new Date() } = req.body;

//   movies.push({
//     id,
//     deadline,
//     description,
//     done,
//   });

//   res.send(200);
// });

// moviesRoute.patch<{ id: string }, {}, IMovies>('/:id?', (req, res) => {
//   const { id } = req.params;

//   const data = req.body;

//   const movie = movies.find((movie) => movie.id === Number(id));

//   if (!movie) {
//     res.sendStatus(404);
//     return;
//   }

//   const newMovies = movies.map((movie) => {
//     if (movie.id !== Number(id)) return movie;

//     return { ...movie, ...data };
//   });

//   movies = newMovies;

//   res.send(200);
// });

// moviesRoute.delete<{ id: string }, {}, IMovies>('/:id?', (req, res) => {
//   const { id } = req.params;

//   const idNumber = Number(id);

//   if (!idNumber && isNaN(idNumber)) {
//     res.sendStatus(400);
//     return;
//   }

//   const movie = movies.find((movie) => movie.id === idNumber);

//   if (!movie) {
//     res.sendStatus(404);
//     return;
//   }

//   movies = movies.filter((movie) => movie.id !== idNumber);

//   return res.sendStatus(200);
// });

export default moviesRoute;
