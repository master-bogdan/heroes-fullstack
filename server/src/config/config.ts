import dotenv from 'dotenv';
import { IConfig } from './config.interface';

dotenv.config();

export const config = (): IConfig => ({
  PORT: parseInt(process.env.PORT!, 10) || 8080,
  DB: {
    MONGO_URI: process.env.MONGO_URI!,
    MONGO_URI_TEST: process.env.MONGO_URI_TEST!,
  },
  JWT: {
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET!,
    JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES!,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,
    JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES!,
  },
});
