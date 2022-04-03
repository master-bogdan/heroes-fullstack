import { ErrorRequestHandler } from 'express';
import { HttpException } from '../common/exceptions/http-exception';
import { consoleMessage } from '../common/utils/console-message';

export const errorMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  consoleMessage.error(err);

  if (err instanceof HttpException) {
    res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  res.status(500).json({ errors: [{ message: err.message }] });
};
