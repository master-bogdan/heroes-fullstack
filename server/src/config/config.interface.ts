export interface IConfig {
  PORT: number;
  MONGO_URI: string;
  JWT_ACCESS_SECRET: string;
  JWT_REFRESH_SECRET: string;
}
