import { HttpException } from './http-exception';

export class DatabaseConnectionException extends HttpException {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor() {
    super('Error connecting to database');

    Object.setPrototypeOf(this, DatabaseConnectionException.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
