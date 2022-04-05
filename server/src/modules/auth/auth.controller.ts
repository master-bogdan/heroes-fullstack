import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationException } from '../../common/exceptions/request-validation-exception';
import { AuthService } from './auth.service';
import { ILoginDTO } from '../../dto/auth/login.dto';

export class AuthController {
  private readonly authService = new AuthService();

  login = async (
    req: Request<Record<string, any>,
    Record<string, any>, ILoginDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const accessToken = await this.authService.login(req.body);

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

  refreshToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        throw new RequestValidationException(errors.array());
      }

      const user = await this.authService.register(req.body);

      return res.status(201).json({ user });
    } catch (error) {
      return next(error);
    }
  };

  passwordRecovery = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json();
    } catch (error) {
      return next(error);
    }
  };
}
