import { body } from 'express-validator';

export const LoginValidationRules = [
  body('password')
    .isLength({ min: 3, max: 15 })
    .withMessage('Password length must be between 3 and 15 characters'),
  body('nickname')
    .isLength({ min: 3, max: 20 })
    .withMessage('Nickname length must be between 3 and 15 characters'),
];
