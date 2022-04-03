import { Request, Response } from 'express';
import { UsersService } from './users.service';

export class UsersController {
  private usersService = new UsersService();

  getUser(req: Request, res: Response) {
    res.send('Get user');
  }

  getCurrentUser(req: Request, res: Response) {
    res.send('Update user');
  }

  updateCurrentUser(req: Request, res: Response) {
    res.send('Update user');
  }
}
