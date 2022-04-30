import { body } from 'express-validator';

export const RegisterValidationRules = [
  body('email')
    .isEmail()
    .withMessage('Email not valid'),
  body('password')
    .isLength({ min: 3, max: 20 })
    .withMessage('Password length must be between 3 and 20 characters'),
  body('nickname')
    .isLength({ min: 3, max: 15 })
    .withMessage('Nickname length must be between 3 and 15 characters'),
];
