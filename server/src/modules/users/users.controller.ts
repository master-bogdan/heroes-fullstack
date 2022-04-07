import { NextFunction, Response } from 'express';
import { ObjectId } from 'mongoose';
import { IUser } from '../../db/models/users.model';
import { UserRequest } from '../../interfaces/user-request.interface';
import { UsersService } from './users.service';

export class UsersController {
  private usersService = new UsersService();

  getUser = async (req: UserRequest, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.params as { userId: string };
      const user = await this.usersService.findOneUser({ userId });

      return res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  };

  getCurrentUser = async (req: UserRequest, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.user!;
      const user = await this.usersService.findOneUser({ userId });

      return res.status(200).json(user);
    } catch (error) {
      return next(error);
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

      return res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  };
}
