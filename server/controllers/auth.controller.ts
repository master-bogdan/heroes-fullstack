import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { UserModel } from '../models/user.model';

const accessTokenSecret = `${process.env.JWT_KEY}`;

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOneByEmail(email);

    if (!user) {
      return res.status(404).json({
        message: 'User not exist!',
        response: 'failed',
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(403).json({
        message: 'Wrong password',
        response: 'failed',
      });
    }

    const accessToken = jwt.sign(
      { email: user.email },
      accessTokenSecret,
      { expiresIn: '30m' },
    );

    user.token = accessToken;
    await user.save();

    return res.status(201).json({
      message: 'Authenticated',
      response: 'success',
      token: accessToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ response: 'Database server error' });
  }
};

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
