import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';

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
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/heroes', HeroesRouter);
app.use('/api/v1/users', UsersRouter);
// Error handling
app.use(errorMiddleware);

bootstrap(app);
