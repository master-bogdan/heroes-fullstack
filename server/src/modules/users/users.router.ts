import { Router } from 'express';
import { UsersController } from './users.controller';

const router = Router();
const usersController = new UsersController();

router
  .get('/:userId', usersController.getUser)
  .get('/me', usersController.getCurrentUser)
  .patch('/me', usersController.updateCurrentUser);

export { router as UsersRouter };
