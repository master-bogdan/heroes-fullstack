import { Request, Response } from 'express';
import { AuthService } from './auth.service';

export const AuthController = ({
  login: async (req: Request, res: Response) => {
    try {
      const accessToken = await AuthService.login(req.body);

      return res.status(201).json({
        message: 'Authenticated',
        response: 'success',
        token: accessToken,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ response: 'Database server error' });
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
