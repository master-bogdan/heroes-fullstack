import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

import { bootstrap } from './bootstrap';
import { errorMiddleware } from './common/middlewares/error.middleware';
import { loggerMiddleware } from './common/middlewares/logger.middleware';
import auth from './auth/auth.router';

dotenv.config();
const app = express();
// Logger
app.use(loggerMiddleware);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Router
app.use('/v1/auth', auth);
// app.use('/v1/api', api);
// Error handling
app.use(errorMiddleware);

bootstrap(app);
