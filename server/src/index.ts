import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import loginRoute from './routes/login';
import moviesRoute from './routes/movies';
import cookiesRoute from './routes/cookies';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use('/login', loginRoute);
app.use('/movies', moviesRoute);
app.use('/cookies', cookiesRoute);

app.listen(3000, () => {
  console.log('Server Started');
});
