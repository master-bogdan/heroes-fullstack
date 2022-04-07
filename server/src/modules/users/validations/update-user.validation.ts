import { body } from 'express-validator';

export const UpdateUserValidationRules = [
  body('nickname')
    .isLength({ min: 3, max: 20 })
    .withMessage('Nickname length must be between 3 and 15 characters'),
];
