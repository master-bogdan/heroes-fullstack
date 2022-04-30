export interface IConfig {
  PORT: number;
  DB: DBConfig;
  JWT: JwtConfig;
}

export interface DBConfig {
  MONGO_URI: string;
  MONGO_URI_TEST: string;
}

export interface JwtConfig {
  JWT_ACCESS_SECRET: string;
  JWT_ACCESS_EXPIRES: string
  JWT_REFRESH_SECRET: string;
  JWT_REFRESH_EXPIRES: string;
}
