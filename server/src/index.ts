import * as express from 'express';
import * as cors from 'cors';
import loginRoute from './routes/login';
import moviesRoute from './routes/movies';

const app = express();
app.use(express.json());

app.use(cors());
app.use('/login', loginRoute);
app.use('/movies', moviesRoute);

app.listen(3000, () => {
  console.log('Server Started');
});
