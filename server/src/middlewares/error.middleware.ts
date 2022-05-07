import { ErrorRequestHandler } from 'express';
import { HttpException } from '../common/exceptions/http-exception';
import { logger } from '../common/utils/logger';

export const errorMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  if (err instanceof HttpException) {
    logger.error(`[error] - ${err.message} ${err.statusCode}`);

    res.status(err.statusCode).json({
      errors: err.errors.length === 0 ? undefined : err.errors,
      message: err.message,
      statusCode: err.statusCode,
    });
  }

  logger.error(`[error] - ${err}`);

  res.status(500).json({
    message: 'Internal Server Error',
    statusCode: 500,
  });
};
