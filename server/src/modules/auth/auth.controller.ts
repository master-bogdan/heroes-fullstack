import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationException } from '../../common/exceptions/request-validation-exception';
import { AuthService } from './auth.service';
import { ILoginDTO } from '../../dto/auth/login.dto';

export class AuthController {
  private readonly authService = new AuthService();

  login = async (req: Request<unknown, unknown, ILoginDTO>, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      next(new RequestValidationException(errors.array()));
    }

    const accessToken = await this.authService.login(req.body);

    return res.status(200).json({ accessToken });
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.authService.register(req.body);

      return res.status(201).json({ user });
    } catch (error) {
      console.log(error);
      next(error);
      return error;
    }
  };
}
