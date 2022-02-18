import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { AuthService } from './auth.service';
import { ILoginDTO } from './dto/login.dto';

export const AuthController = ({
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        throw new Error(errors.array().toString());
      }

      const { email, password }: ILoginDTO = req.body;

      const accessToken = await AuthService.login(req.body);

      return res.status(201).json({ token: accessToken });
    } catch (error) {
      return next(error);
    }
  },
  register: async (req: Request, res: Response) => {
    try {
      const something = await AuthService.register(req.body);

      return res.status(201).json({
        message: 'Authenticated',
        response: 'success',
        something,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ response: 'Database server error' });
    }
  },
});
