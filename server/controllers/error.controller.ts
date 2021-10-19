import { Request, Response } from 'express';

export const errorController = (
  err: Error,
  req: Request,
  res: Response,
) => res.status(500).json({ message: err.message });
