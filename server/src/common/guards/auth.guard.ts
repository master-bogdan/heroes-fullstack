import { Response, NextFunction } from 'express';
import { UserRequest } from '../../interfaces/user-request.interface';
import { JwtService } from '../../modules/auth/services/jwt.service';
import { HttpException } from '../exceptions/http-exception';

export const authGuard = async (req: UserRequest, res: Response, next: NextFunction) => {
  const jwtService = new JwtService();

  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw HttpException.UnauthorizedError();
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      throw HttpException.UnauthorizedError();
    }

    const userData = jwtService.validateAccessToken(accessToken);

    if (!userData) {
      throw HttpException.Forbidden('Token is not valid');
    }

    req.user = userData;
    return next();
  } catch (e) {
    return next(e);
  }
};
