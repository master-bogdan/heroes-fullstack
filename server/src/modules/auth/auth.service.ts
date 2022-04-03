import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { ILoginDTO } from '../../dto/auth/login.dto';
import { JwtService } from './jwt/jwt.service';
import WrongCredentialsException from '../../common/exceptions/wrong-credentials.exception';

interface IAuthService {
  login(dto: ILoginDTO): any;
  register(dto: any): any;
}

export class AuthService implements IAuthService {
  private readonly usersService = new UsersService();

  async login(dto: ILoginDTO) {
    const { email, password } = dto;

    const user = await this.usersService.findOneUser(email);

    if (!user) {
      throw new Error('User not exist!');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new WrongCredentialsException();
    }

    const accessToken = JwtService.generateAccessToken(user.email);

    return accessToken;
  }

  register = async (dto: ILoginDTO) => {
    const { nickname, email, password } = dto;

    console.log(dto);

    const foundedUser = await this.usersService.findOneUser(email);

    if (foundedUser) {
      throw new Error('User exist!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersService.createUser({
      email,
      password: hashedPassword,
      nickname,
    });

    return user;
  };
}
