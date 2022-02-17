import { body } from 'express-validator';

export interface ILoginDTO {
  email: string;
  password: string;
}

export const ValidateLoginDTO = [
  body('email').notEmpty().isEmail(),
  body('password').notEmpty().isString(),
];
