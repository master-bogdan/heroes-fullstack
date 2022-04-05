import { Router } from 'express';
import { validateMiddleware } from '../../middlewares/validate.middleware';
import { AuthController } from './auth.controller';
import { LoginValidationRules } from './validations/login.validation';
import { RegisterValidationRules } from './validations/register.validation';

const router = Router();
const authController = new AuthController();

router
  .post('/login', LoginValidationRules, validateMiddleware, authController.login)
  .post('/register', RegisterValidationRules, validateMiddleware, authController.register)
  .post('/password/recovery', RegisterValidationRules, authController.refreshToken)
  .get('/token', RegisterValidationRules, authController.refreshToken);

export { router as AuthRouter };
