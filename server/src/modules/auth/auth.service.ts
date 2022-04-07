import bcrypt from 'bcryptjs';
// Exceptions
import { HttpException } from '../../common/exceptions/http-exception';
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
  refresh(accessToken: string): Promise<{ accessToken: string }>;
  /**
   * @todo
   */
  passwordRecovery(): any
}

export class AuthService implements IAuthService {
  readonly usersService = new UsersService();
  readonly jwtService = new JwtService();
  readonly sessionsService = new SessionsService();

  async login(dto: ILoginDTO) {
    const { nickname, password } = dto;

    const user = await this.usersService.findOneUser({ nickname });

    if (!user) {
      throw HttpException.NotFound('User not found');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw HttpException.Forbidden('Wrong password');
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
      throw HttpException.Forbidden('User with this email or nickname exist!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersService.createUser({
      email,
      password: hashedPassword,
      nickname,
    } as IUser);

    return user;
  }

  async logout(userId: string) {
    const session = await this.sessionsService.deleteSession(userId);

    if (!session) {
      throw HttpException.DatabaseConnectionError();
    }

    return { logout: true };
  }

  async refresh(accessToken: string) {
    const userPayload = this.jwtService.validateAccessToken(accessToken, true);

    const sessionExist = await this.sessionsService.findSession(userPayload!.userId);

    if (!sessionExist) {
      throw HttpException.NotFound('Session not exist, please login again');
    }

    const payload = this.jwtService.validateRefreshToken(sessionExist.refreshToken);

    if (!payload) {
      throw HttpException.Forbidden('Refresh token invalid');
    }

    const tokens = this.jwtService.generateTokens(payload.userId);
    const session = await this.sessionsService.updateSession({
      ...tokens,
      userId: payload.userId,
    });

    if (!session) {
      throw HttpException.DatabaseConnectionError();
    }

    return { accessToken: tokens.accessToken };
  }

  async passwordRecovery() {
    return true;
  }
}
