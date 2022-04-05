import bcrypt from 'bcryptjs';
// Exceptions
import CustomException from '../../common/exceptions/custom.exception';
import { NotFoundException } from '../../common/exceptions/not-found-exception';
import WrongCredentialsException from '../../common/exceptions/wrong-credentials.exception';
// Types
import { IUser } from '../../db/models/users.model';
import { ILoginDTO } from '../../dto/auth/login.dto';
// Services
import { UsersService } from '../users/users.service';
import { JwtService } from './services/jwt.service';

interface IAuthService {
  login(dto: ILoginDTO): any;
  register(dto: Required<ILoginDTO>): any;
}

export class AuthService implements IAuthService {
  private readonly usersService = new UsersService();

  login = async (dto: ILoginDTO) => {
    const { nickname, password } = dto;

    const user = await this.usersService.findOneUser({ nickname });

    if (!user) {
      throw new NotFoundException();
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new WrongCredentialsException('Wrong password');
    }

    const { accessToken } = JwtService.generateTokens(user._id);

    return accessToken;
  };

  register = async (dto: ILoginDTO) => {
    const { nickname, email, password } = dto;

    const foundedUser = await this.usersService.findOneUser({ email, nickname });

    if (foundedUser) {
      throw new CustomException(403, 'User with this email or nickname exist!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersService.createUser({
      email,
      password: hashedPassword,
      nickname,
    } as IUser);

    return user;
  };
}
