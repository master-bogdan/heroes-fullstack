import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
// Exceptions
import { NotAuthroizedException } from '../../common/exceptions/not-authorized-exception';
import { RequestValidationException } from '../../common/exceptions/request-validation-exception';
// Services
import { AuthService } from './auth.service';
// DTO
import { ILoginDTO } from '../../dto/auth/login.dto';
// Interfaces
import { UserRequest } from '../../interfaces/user-request.interface';

export class AuthController {
  private readonly authService = new AuthService();

  login = async (
    req: Request<Record<string, any>, Record<string, any>, ILoginDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { accessToken } = await this.authService.login(req.body);

      return res.status(200).json({ accessToken });
    } catch (error) {
      return next(error);
    }
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        throw new RequestValidationException(errors.array());
      }

      const user = await this.authService.register(req.body);

      return res.status(201).json(user);
    } catch (error) {
      return next(error);
    }
  };

  logout = async (req: UserRequest, res: Response, next: NextFunction) => {
    try {
      const logout = await this.authService.logout(req.user!.userId);
      return res.status(200).json(logout);
    } catch (e) {
      return next(e);
    }
  };

  refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authorizationHeader = req.headers.authorization;
      if (!authorizationHeader) {
        throw new NotAuthroizedException();
      }

      const accessToken = authorizationHeader.split(' ')[1];
      if (!accessToken) {
        throw new NotAuthroizedException();
      }

      const newAccessToken = await this.authService.refresh(accessToken);

      return res.status(200).json(newAccessToken);
    } catch (error) {
      return next(error);
    }
  };

  passwordRecovery = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const test = await this.authService.passwordRecovery();

      return res.status(200).json(test);
    } catch (error) {
      return next(error);
    }
  };
}
