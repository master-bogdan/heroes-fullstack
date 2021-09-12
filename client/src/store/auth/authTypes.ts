export const AUTH_SET = 'AUTH_SET';
export const AUTH_SET_LOADING = 'AUTH_SET_LOADING';
export const AUTH_ERROR = 'AUTH_ERROR';

export interface AuthState {
  isLogin: boolean;
  isLoading: boolean;
  isError: boolean;
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

interface SetAuthErrorAction {
  type: typeof AUTH_ERROR;
  payload: boolean;
}

export type AuthActions =
SetAuthAction |
SetAuthLoadingAction |
SetAuthErrorAction;
