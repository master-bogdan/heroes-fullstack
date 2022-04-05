import { Request, Response, NextFunction } from 'express';
import { consoleMessage } from '../common/utils/console-message';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  consoleMessage.logger(`[controller] - ${req.method} ${req.path}`);
  next();
};
