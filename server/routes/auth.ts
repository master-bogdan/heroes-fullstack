import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/User';

const auth = express.Router();
const accessTokenSecret = `${process.env.JWT_KEY}`;

auth.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not exist!',
        response: 'failed',
      });
    }

    return bcrypt.compare(password, user.password, (error, response) => {
      if (error) {
        return res.status(404).json({
          message: 'Wrong password',
          response: 'failed',
        });
      }

      if (response) {
        const accessToken = jwt.sign(
          { email: user.email },
          accessTokenSecret,
          { expiresIn: '30m' },
        );

        return res.status(201).json({
          message: 'Authenticated',
          response: 'success',
          token: accessToken,
        });
      }

      return res.status(401).json({
        message: 'Wrong password',
        response: 'failed',
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ response: error });
  }
});

auth.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(401).json({
        message: 'User exist!',
        response: 'failed',
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hash,
    });
    const savedUser = await user.save();

    return res.status(201).json({
      message: 'User successfully created!',
      response: savedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ response: error });
  }
});

export default auth;
