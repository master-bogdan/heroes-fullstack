export const SET_AUTH = 'SET_AUTH';
export const CHECK_AUTH = 'CHECK_AUTH';

export interface AuthState {
  isLogin: boolean
  token: string | null
}

export type User = {
  email: string
  password: string
}

interface SetAuthAction {
  type: typeof SET_AUTH
  payload: AuthState
}
interface CheckAuthAction {
  type: typeof CHECK_AUTH
  payload: AuthState
}

export type AuthActions =
SetAuthAction |
CheckAuthAction;
