export interface IConfig {
  PORT: number;
  MONGO_URI: string;
  MONGO_URI_TEST: string;
  JWT_ACCESS_SECRET: string;
  JWT_REFRESH_SECRET: string;
}
