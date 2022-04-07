import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { HttpException } from '../common/exceptions/http-exception';

export const validateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    throw HttpException.RequestValidationError({ errors: errors.array() });
  } catch (error) {
    return next(error);
  }
};
