import jwt from 'jsonwebtoken';
import { UserPayload } from '../../../interfaces/payload.interface';
import { config } from '../../../config/config';

interface IJwtService {
  readonly accessTokenSecret: string;
  readonly refreshTokenSecret: string;
  generateTokens(userId: string): { accessToken: string; refreshToken: string };
  validateAccessToken(token: string): UserPayload | null;
  validateRefreshToken(token: string): UserPayload | null;
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
      this.refreshTokenSecret,
      { expiresIn: '30d' },
    );

    return { accessToken, refreshToken };
  }

  validateAccessToken(token: string, ignoreExpiration?: boolean) {
    try {
      const payload = jwt.verify(
        token,
        this.accessTokenSecret,
        {
          ignoreExpiration,
        },
      ) as UserPayload;

      return payload;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      const payload = jwt.verify(token, this.refreshTokenSecret) as UserPayload;

      return payload;
    } catch (error) {
      return null;
    }
  }
}
