import { NextFunction, Response } from 'express';
import { ObjectId } from 'mongoose';
import { IUser } from '../../db/models/users.model';
import { UserRequest } from '../../interfaces/user-request.interface';
import { UsersService } from './users.service';

interface IUsersController {
  readonly usersService: UsersService;
  getUser: (req: UserRequest, res: Response, next: NextFunction) => void;
  getCurrentUser: (req: UserRequest, res: Response, next: NextFunction) => void;
  updateCurrentUser: (req: UserRequest, res: Response, next: NextFunction) => void;
}
export class UsersController implements IUsersController {
  readonly usersService = new UsersService();

  getUser = async (req: UserRequest, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.params as { userId: string };
      const user = await this.usersService.findOneUser({ userId });

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  getCurrentUser = async (req: UserRequest, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.user!;
      const user = await this.usersService.findOneUser({ userId });

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  updateCurrentUser = async (req: UserRequest, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.user!;
      const userFields = req.body as Partial<IUser>;
      const user = await this.usersService.updateUser({
        ...userFields,
        _id: (userId as unknown) as ObjectId,
      });

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}
