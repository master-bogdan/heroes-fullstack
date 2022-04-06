import bcrypt from 'bcryptjs';
// Exceptions
import CustomException from '../../common/exceptions/custom.exception';
import { NotFoundException } from '../../common/exceptions/not-found-exception';
import WrongCredentialsException from '../../common/exceptions/wrong-credentials.exception';
import { DatabaseConnectionException } from '../../common/exceptions/database-connection-exception';
// Types
import { IUser } from '../../db/models/users.model';
import { ILoginDTO } from '../../dto/auth/login.dto';
// Services
import { UsersService } from '../users/users.service';
import { JwtService } from './services/jwt.service';
import { SessionsService } from './services/sessions.service';

interface IAuthService {
  readonly usersService: UsersService;
  readonly jwtService: JwtService;
  readonly sessionsService: SessionsService;
  login(dto: ILoginDTO): Promise<{ accessToken: string, refreshToken: string }>;
  register(dto: Required<ILoginDTO>): Promise<IUser>;
}

export class AuthService implements IAuthService {
  readonly usersService = new UsersService();
  readonly jwtService = new JwtService();
  readonly sessionsService = new SessionsService();

  async login(dto: ILoginDTO) {
    const { nickname, password } = dto;

    const user = await this.usersService.findOneUser({ nickname });

    if (!user) {
      throw new NotFoundException();
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new WrongCredentialsException('Wrong password');
    }

    const tokens = this.jwtService.generateTokens(user._id);
    await this.sessionsService.createSession({
      ...tokens,
      userId: user._id,
    });

    return tokens;
  }

  async register(dto: ILoginDTO) {
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
  }

  async logout(refreshToken: string) {
    return this.sessionsService.deleteSession(refreshToken);
  }

  async refresh(userId: string) {
    const sessionExist = await this.sessionsService.findSession(userId);

    if (!sessionExist) {
      throw new NotFoundException('Session not exist, please login again');
    }

    const payload = this.jwtService.validateRefreshToken(sessionExist.refreshToken);

    if (!payload) {
      throw new CustomException(403, 'Refresh token invalid');
    }

    const tokens = this.jwtService.generateTokens(userId);
    const session = await this.sessionsService.updateSession({
      ...tokens,
      userId,
    });

    if (!session) {
      throw new DatabaseConnectionException();
    }

    console.log(session);

    return session;
  }
}
