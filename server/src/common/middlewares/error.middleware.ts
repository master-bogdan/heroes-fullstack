import { ErrorRequestHandler } from 'express';
import { consoleMessage } from '../../utils/console-message';

export const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  consoleMessage.error(err);
  res.status(500).json({ message: err });
};
