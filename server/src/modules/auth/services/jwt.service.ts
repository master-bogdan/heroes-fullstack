import jwt from 'jsonwebtoken';

const accessTokenSecret = `${process.env.JWT_ACCESS_SECRET}`;

export class JwtService {
  static generateTokens(userId: string) {
    const accessToken = jwt.sign(
      { userId },
      accessTokenSecret,
      { expiresIn: '30m' },
    );

    const refreshToken = jwt.sign(
      { userId },
      accessTokenSecret,
      { expiresIn: '30d' },
    );

    return { accessToken, refreshToken };
  }

  static validateAccessToken(token: string) {
    const accessToken = jwt.verify(token, accessTokenSecret);

    return accessToken;
  }

  static validateRefreshToken(token: string) {
    const accessToken = jwt.verify(token, accessTokenSecret);

    return accessToken;
  }
}
