import { body } from 'express-validator';

export const CreateHeroValidationRules = [
  body('title')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Title length must be more than 3 characters'),
  body('description')
    .isString()
    .isLength({ min: 10 })
    .withMessage('Description must be more than 10 characters'),
  body('imageUrl')
    .isString()
    .isURL()
    .withMessage('Image must be valid URL'),
];
