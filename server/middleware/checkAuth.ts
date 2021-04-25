import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;
  try {
    if (token) {
      const decoded = jwt.decode(token, { complete: true });
      const user = await User.findOne({ email: decoded?.payload.email });

      if (user?.token === token) {
        next();
      } else {
        res.status(403).json({
          message: 'You must be authorized',
          response: 'failed',
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(403).json({
      message: 'You must be authorized',
      response: 'failed',
    });
  }
};

export default checkAuth;
