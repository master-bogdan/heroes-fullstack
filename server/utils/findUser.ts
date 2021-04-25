import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

const findUser = async (
  req: Request,
  res: Response,
) => {
  const token = req.headers.authorization;
  try {
    if (token) {
      const decoded = jwt.decode(token, { complete: true });
      const user = await User.findOne({ email: decoded?.payload.email });

      if (user) {
        return user;
      }
    }

    return res.status(403).json({
      message: 'You must be authorized',
      response: 'failed',
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      message: 'You must be authorized',
      response: 'failed',
    });
  }
};

export default findUser;
