import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { IUser, UserSchema } from '../schemas/UserSchema';
import { verifyToken } from '../utils/verifyToken';

const accessTokenSecret = `${process.env.JWT_KEY}`;

export class UserModel {
  static async createUser(email: string, password: string): Promise<IUser | null> {
    const user = new UserSchema({
      email,
      password,
      dateCreated: Date.now(),
    });

    return user.save();
  }

  static async findOneByEmail(email: string): Promise<IUser | null> {
    return UserSchema.findOne({ email });
  }

  static async findUserWithToken(token: string | undefined): Promise<IUser | null> {
    if (!token) {
      throw new Error('Token not valid!');
    }

    try {
      const user = await UserSchema.findOne({ token });

      if (user) {
        return user;
      }

      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async checkAuth(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response<any, Record<string, any>>> {
    const token = req.headers.authorization;

    if (!verifyToken(token) || !token) {
      throw new Error('Token not valid!');
    }

    try {
      const decoded = jwt.decode(token, { complete: true });
      const user = await UserSchema.findOne({ email: decoded?.payload.email });

      if (user && user.token === token) {
        return next();
      }

      return res.status(403).json({
        message: 'You must be authorized',
        response: 'failed',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error,
        response: 'failed',
      });
    }
  }
}
