import bcrypt from 'bcryptjs';
import { IUser } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { JwtService } from './jwt/jwt.service';

export const AuthService = ({
  login: async (dto: any) => {
    const { email, password } = dto;

    const user = await UsersService.findOne(email);

    if (!user) {
      throw new Error('User not exist!');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('Wrong password');
    }

    const accessToken = JwtService.generateAccessToken(user.email);

    return accessToken;
  },
  register: async (dto: any) => {
    const { nickName, email, password } = dto;

    try {
      const foundedUser = await UsersService.findOne(email);

      if (foundedUser) {
        throw new Error('User exist!');
      }

      const hash = await bcrypt.hash(password, 10);
      const user = await UsersService.create({
        email,
        password: hash,
        nickName,
      } as IUser);

      return user;
    } catch (error) {
      console.log(error);
      throw new Error('Database server error');
    }
  },
});
