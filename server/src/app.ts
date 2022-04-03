import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

import { bootstrap } from './bootstrap';
import { errorMiddleware } from './middlewares/error.middleware';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { AuthRouter } from './modules/auth/auth.router';
import { UsersRouter } from './modules/users/users.router';
import { HeroesRouter } from './modules/heroes/heroes.router';

dotenv.config();
const app = express();
// Logger
app.use(loggerMiddleware);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Router
app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/heroes', HeroesRouter);
app.use('/api/v1/users', UsersRouter);
// Error handling
app.use(errorMiddleware);

bootstrap(app);
