import { HttpException } from './http-exception';

export class NotAuthroizedException extends HttpException {
  statusCode = 401;
  message = 'User not authorized';

  constructor(message?: string) {
    super('User not authorized');

    if (message) {
      this.message = message;
    }

    Object.setPrototypeOf(this, NotAuthroizedException.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
