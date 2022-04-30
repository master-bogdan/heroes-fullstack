export interface AuthState {
  isLogin: boolean;
  user?: User;
}

export type User = {
  _id: string;
  email: string;
  password: string;
  nickname: string;
  heroes?: any[];
}
