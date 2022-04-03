export abstract class HttpException extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, HttpException.prototype);
  }

  abstract serializeErrors(): {
    message: string;
    field?: string;
  }[];
}
