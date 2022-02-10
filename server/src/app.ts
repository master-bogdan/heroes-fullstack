import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { globalExceptionFilter } from './common/exceptions/exception.filter';
import api from './routes/api';
import auth from './routes/auth';
import { bootstrap } from './bootstrap';
import { loggerMiddleware } from './common/middlewares/logger.middleware';

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
app.use('/v1/api', api);
// Error handling
app.use(globalExceptionFilter);

bootstrap(app);
