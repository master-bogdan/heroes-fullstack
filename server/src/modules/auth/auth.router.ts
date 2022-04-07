import { Router } from 'express';
import { validateMiddleware } from '../../middlewares/validate.middleware';
import { authGuard } from '../../guards/auth.guard';
import { AuthController } from './auth.controller';
import { LoginValidationRules } from './validations/login.validation';
import { RegisterValidationRules } from './validations/register.validation';

const router = Router();
const authController = new AuthController();

router
  .post('/login', LoginValidationRules, validateMiddleware, authController.login)
  .get('/logout', authGuard, authController.logout)
  .post('/register', RegisterValidationRules, validateMiddleware, authController.register)
  .post('/password/recovery', RegisterValidationRules, authController.passwordRecovery)
  .get('/token', authController.refresh);

export { router as AuthRouter };
