import jwt from 'jsonwebtoken';

const accessTokenSecret = `${process.env.JWT_KEY}`;

export const verifyToken = (token: string | undefined): boolean => {
  let isValid = true;

  if (!token) {
    isValid = false;
    return isValid;
  }

  jwt.verify(token, accessTokenSecret, (err) => {
    if (err) {
      isValid = false;
    }
  });

  return isValid;
};
