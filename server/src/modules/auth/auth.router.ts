import { Router } from 'express';
import { AuthController } from './auth.controller';
import { ValidateLogin } from './validations/login.validation';

const router = Router();
const authController = new AuthController();

router
  .post('/login', ValidateLogin, authController.login)
  .post('/register', authController.register);

export { router as AuthRouter };
