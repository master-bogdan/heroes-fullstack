import jwt from 'jsonwebtoken';
import { config } from '../../../config/config';

interface IJwtService {
  readonly accessTokenSecret: string;
  readonly refreshTokenSecret: string;
  generateTokens(userId: string): { accessToken: string; refreshToken: string };
  validateAccessToken(token: string): any;
  validateRefreshToken(token: string): any;
}

export class JwtService implements IJwtService {
  readonly accessTokenSecret: string;
  readonly refreshTokenSecret: string;

  constructor() {
    const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = config();

    this.accessTokenSecret = JWT_ACCESS_SECRET;
    this.refreshTokenSecret = JWT_REFRESH_SECRET;
  }

  generateTokens(userId: string) {
    const accessToken = jwt.sign(
      { userId },
      this.accessTokenSecret,
      { expiresIn: '30m' },
    );

    const refreshToken = jwt.sign(
      { userId },
      this.accessTokenSecret,
      { expiresIn: '30d' },
    );

    return { accessToken, refreshToken };
  }

  validateAccessToken(token: string) {
    const payload = jwt.verify(token, this.accessTokenSecret);

    return payload;
  }

  validateRefreshToken(token: string) {
    const payload = jwt.verify(token, this.refreshTokenSecret);

    return payload;
  }
}
