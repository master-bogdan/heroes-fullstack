import { Request, NextFunction, Response } from 'express';

export class HealthController {
  async checkHealth(req: Request, res: Response, next: NextFunction) {
    try {
      const healthData = {
        uptime: process.uptime(),
        message: 'Api is working',
        date: new Date(),
      };

      res.status(200).json(healthData);
    } catch (error) {
      next(error);
    }
  }
}
