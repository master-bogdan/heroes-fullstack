import { HttpException } from './http-exception';

class CustomException extends HttpException {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;

    Object.setPrototypeOf(this, CustomException.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default CustomException;
