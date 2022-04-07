import { ErrorRequestHandler } from 'express';
import { HttpException } from '../common/exceptions/http-exception';
import { consoleMessage } from '../common/utils/console-message';

export const errorMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  if (err instanceof HttpException) {
    consoleMessage.error(`[error] - ${err.message} ${err.statusCode}`);

    res.status(err.statusCode).json({
      errors: err.errors.length === 0 ? undefined : err.errors,
      message: err.message,
      statusCode: err.statusCode,
    });
  }

  consoleMessage.error(`[error] - ${err}`);

  res.status(500).json({
    message: 'Internal Server Error',
    statusCode: 500,
  });
};
