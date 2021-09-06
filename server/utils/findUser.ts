import jwt from 'jsonwebtoken';
import { IUser, User } from '../models/User';

const findUser = async (token: string | undefined): Promise<IUser | null> => {
  if (!token) {
    throw new Error('Token not valid!');
  }

  try {
    const decoded = jwt.decode(token, { complete: true });
    const user = await User.findOne({ email: decoded?.payload.email });

    if (user) {
      return user;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default findUser;
