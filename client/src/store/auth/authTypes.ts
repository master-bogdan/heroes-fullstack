export const CHECK_AUTH = 'CHECK_AUTH';

export interface AuthState {
  isLogin: boolean
}

interface SetAuthAction {
  type: typeof CHECK_AUTH
  payload: boolean
}

export type AuthActions = SetAuthAction;
