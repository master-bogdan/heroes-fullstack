import { Router } from 'express';
import { validateMiddleware } from '../../common/middlewares/validate.middleware';
import { authGuard } from '../../common/guards/auth.guard';
import { UsersController } from './users.controller';
import { UpdateUserValidationRules } from './validations/update-user.validation';

const router = Router();
const usersController = new UsersController();

router
  .get('/:userId', usersController.getUser)
  .post('/me', authGuard, usersController.getCurrentUser)
  .patch('/me', authGuard, UpdateUserValidationRules, validateMiddleware, usersController.updateCurrentUser);

export { router as UsersRouter };
