import { ValidationError } from 'express-validator';

export class HttpException extends Error {
  statusCode: number;
  errors: any[];

  constructor(status: number, message?: string, errors: any[] = []) {
    super(message);

    this.statusCode = status;
    this.errors = errors;
  }

  static BadRequest({ message = 'Bad request', errors = [] }) {
    return new HttpException(400, message, errors);
  }

  static UnauthorizedError(message = 'Not authorized') {
    return new HttpException(401, message);
  }

  static Forbidden(message = 'Forbidden') {
    return new HttpException(403, message);
  }

  static NotFound(message = 'Not found') {
    return new HttpException(404, message);
  }

  static RequestValidationError({
    message = 'Invalid request parameters',
    errors = [],
  } : { message?: string; errors: ValidationError[] }) {
    return new HttpException(406, message, errors.map((error) => ({
      error: error.msg,
      field: error.param,
    })));
  }

  static DatabaseConnectionError(message = 'Error connecting to database') {
    return new HttpException(500, message);
  }
}
