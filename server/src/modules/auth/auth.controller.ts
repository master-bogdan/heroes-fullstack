import { NextFunction, Request, Response } from 'express';
// Exceptions
import { HttpException } from '../../common/exceptions/http-exception';
// Services
import { AuthService } from './auth.service';
// DTO
import { ILoginDTO } from '../../dto/auth/login.dto';
// Interfaces
import { UserRequest } from '../../interfaces/user-request.interface';

interface IAuthController {
  readonly authService: AuthService;
  login: (req: Request, res: Response, next: NextFunction) => void;
  register: (req: Request, res: Response, next: NextFunction) => void;
  logout: (req: UserRequest, res: Response, next: NextFunction) => void;
  refresh: (req: Request, res: Response, next: NextFunction) => void;
  passwordRecovery: (req: Request, res: Response, next: NextFunction) => void;
}
export class AuthController implements IAuthController {
  readonly authService = new AuthService();

  login = async (
    req: Request<Record<string, any>, Record<string, any>, ILoginDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { accessToken } = await this.authService.login(req.body);

      res.status(200).json({ accessToken });
    } catch (error) {
      next(error);
    }
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.authService.register(req.body);

      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };

  logout = async (req: UserRequest, res: Response, next: NextFunction) => {
    try {
      const logout = await this.authService.logout(req.user!.userId);

      res.status(200).json(logout);
    } catch (e) {
      next(e);
    }
  };

  refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authorizationHeader = req.headers.authorization;
      if (!authorizationHeader) {
        throw HttpException.UnauthorizedError();
      }

      const accessToken = authorizationHeader.split(' ')[1];
      if (!accessToken) {
        throw HttpException.UnauthorizedError();
      }

      const newAccessToken = await this.authService.refresh(accessToken);

      res.status(200).json(newAccessToken);
    } catch (error) {
      next(error);
    }
  };

  passwordRecovery = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const test = await this.authService.passwordRecovery();

      res.status(200).json(test);
    } catch (error) {
      next(error);
    }
  };
}
