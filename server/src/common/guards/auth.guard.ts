import { Response, NextFunction } from 'express';
import { UserRequest } from '../../interfaces/user-request.interface';
import { JwtService } from '../../modules/auth/services/jwt.service';
import { NotAuthroizedException } from '../exceptions/not-authorized-exception';

export const authGuard = async (req: UserRequest, res: Response, next: NextFunction) => {
  const jwtService = new JwtService();

  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new NotAuthroizedException();
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      throw new NotAuthroizedException();
    }

    const userData = jwtService.validateAccessToken(accessToken);
    if (!userData) {
      throw new NotAuthroizedException('Token is not valid');
    }

    req.user = userData as string[];
    return next();
  } catch (e) {
    console.log(e);
    return next(new NotAuthroizedException());
  }
};
