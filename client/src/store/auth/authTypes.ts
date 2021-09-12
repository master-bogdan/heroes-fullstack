export const AUTH_SET = 'AUTH_SET';
export const AUTH_SET_LOADING = 'AUTH_SET_LOADING';
export const AUTH_SET_REGISTER = 'AUTH_SET_REGISTER';
export const AUTH_ERROR = 'AUTH_ERROR';

export interface AuthState {
  isLogin: boolean;
  isLoading: boolean;
  isRegister: boolean;
  error: string;
}

export type User = {
  email: string;
  password: string;
}

interface SetAuthAction {
  type: typeof AUTH_SET;
  payload: boolean;
}

interface SetAuthLoadingAction {
  type: typeof AUTH_SET_LOADING;
  payload: boolean;
}

interface SetAuthRegisterAction {
  type: typeof AUTH_SET_REGISTER;
  payload: boolean;
}

interface SetAuthErrorAction {
  type: typeof AUTH_ERROR;
  payload: string;
}

export type AuthActions =
SetAuthAction |
SetAuthRegisterAction |
SetAuthLoadingAction |
SetAuthErrorAction;
