import dotenv from 'dotenv';
import { IConfig } from './config.interface';

dotenv.config();

export const config = (): IConfig => ({
  PORT: parseInt(process.env.PORT!, 10) || 8080,
  MONGO_URI: process.env.MONGO_URI!,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET!,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,
});
