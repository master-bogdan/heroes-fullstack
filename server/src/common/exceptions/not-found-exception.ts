import { HttpException } from './http-exception';

export class NotFoundException extends HttpException {
  statusCode = 404;

  constructor() {
    super('Not found');

    Object.setPrototypeOf(this, NotFoundException.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not Found' }];
  }
}
