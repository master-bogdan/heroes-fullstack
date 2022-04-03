import { HttpException } from './http-exception';

class WrongCredentialsException extends HttpException {
  statusCode = 401;

  constructor() {
    super('Wrong credentials provided');
  }

  serializeErrors() {
    return [{ message: 'Wrong credentials provided' }];
  }
}

export default WrongCredentialsException;
