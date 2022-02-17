import { Request, Response, NextFunction } from 'express';
import { loggerDate } from '../../utils/dates';

export const loggerMiddleware = (request: Request, response: Response, next: NextFunction) => {
  console.log(`[${loggerDate}] - ${request.method} ${request.path}`);
  next();
};
