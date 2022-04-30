import { body } from 'express-validator';

export const UpdateHeroValidationRules = [
  body('title')
    .optional({ checkFalsy: true })
    .isString()
    .isLength({ min: 3 })
    .withMessage('Title length must be more than 3 characters'),
  body('description')
    .optional({ checkFalsy: true })
    .isString()
    .isLength({ min: 10 })
    .withMessage('Description must be more than 10 characters'),
  body('imageUrl')
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage('Image must be valid URL'),
];
