import { HttpException } from './http-exception';

export class NotFoundException extends HttpException {
  statusCode = 404;
  message = 'Not found';

  constructor(message?: string) {
    super('Not found');

    if (message) {
      this.message = message;
    }

    Object.setPrototypeOf(this, NotFoundException.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
