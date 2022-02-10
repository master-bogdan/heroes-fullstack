import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AuthService } from './auth.service';

const accessTokenSecret = `${process.env.JWT_KEY}`;

export const AuthController = ({
  login: (req: Request, res: Response) => (AuthService.login(req.body)),
  register: (req: Request, res: Response) => (AuthService.register()),
});

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const foundedUser = await UserModel.findOneByEmail(email);

    if (foundedUser) {
      return res.status(401).json({
        message: 'User exist!',
        response: 'failed',
      });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await UserModel.createUser(email, hash);

    if (!user) {
      throw new Error('Something wrong');
    }

    return res.status(201).json({
      message: 'User successfully created!',
      response: 'success',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ response: error });
  }
};
