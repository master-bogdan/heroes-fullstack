import { Request, Response, NextFunction } from 'express';
import { logger } from '../common/utils/logger';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logger.log(`[controller] - ${req.method} ${req.path}`);
  next();
};
