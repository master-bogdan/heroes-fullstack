import { Request, Response, NextFunction } from 'express';
import { consoleMessage } from '../../utils/console-message';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  consoleMessage.logger(`${req.method} ${req.path}`);
  next();
};
