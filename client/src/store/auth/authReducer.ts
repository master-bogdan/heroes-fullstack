import {
  SET_AUTH,
  CHECK_AUTH,
  AuthState,
  AuthActions,
} from './authTypes';

const initialState: AuthState = {
  isLogin: false,
  token: null,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        token: action.payload.token,
      };
    case CHECK_AUTH:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default authReducer;
