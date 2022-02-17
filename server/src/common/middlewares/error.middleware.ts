import { ErrorRequestHandler } from 'express';

export const errorMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => res.status(500).json({ message: err });
