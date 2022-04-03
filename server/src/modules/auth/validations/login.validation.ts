import { body } from 'express-validator';

export const ValidateLogin = [
  body('email')
    .notEmpty()
    .isEmail(),
  body('password')
    .notEmpty()
    .isString(),
  body('nickname')
    .notEmpty()
    .isString(),
];
