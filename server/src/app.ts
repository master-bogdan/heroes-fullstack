import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
// Middlewares
import { errorMiddleware } from './middlewares/error.middleware';
import { loggerMiddleware } from './middlewares/logger.middleware';
// Routers
import { AuthRouter } from './modules/auth/auth.router';
import { UsersRouter } from './modules/users/users.router';
import { HeroesRouter } from './modules/heroes/heroes.router';
import { HealthRouter } from './modules/health/health.router';

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
app.use('/api/v1/users', UsersRouter);
app.use('/api/v1/heroes', HeroesRouter);
app.use('/api/v1/health', HealthRouter);
// Error handling
app.use(errorMiddleware);

export { app };
