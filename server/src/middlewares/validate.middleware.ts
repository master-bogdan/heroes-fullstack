import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationException } from '../common/exceptions/request-validation-exception';

export const validateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    throw new RequestValidationException(errors.array());
  } catch (error) {
    return next(error);
  }
};
