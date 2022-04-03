import jwt from 'jsonwebtoken';

const accessTokenSecret = `${process.env.JWT_ACCESS_SECRET}`;

export const JwtService = ({
  generateAccessToken: (email: string) => {
    const accessToken = jwt.sign(
      { email },
      accessTokenSecret,
      { expiresIn: '30m' },
    );

    return accessToken;
  },
  validateAccessToken: () => {

  },
});
