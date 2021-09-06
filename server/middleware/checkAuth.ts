import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new Error('Token not valid!');
  }

  try {
    const decoded = jwt.decode(token, { complete: true });
    const user = await User.findOne({ email: decoded?.payload.email });

    if (user?.token === token) {
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
};

export default checkAuth;
