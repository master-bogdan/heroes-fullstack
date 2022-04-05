import { HttpException } from './http-exception';

class WrongCredentialsException extends HttpException {
  statusCode = 401;
  message = 'Wrong credentials provided';

  constructor(message?: string) {
    super('Wrong credentials provided');

    if (message) {
      this.message = message;
    }

    Object.setPrototypeOf(this, WrongCredentialsException.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default WrongCredentialsException;
