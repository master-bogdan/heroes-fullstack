import {
  CHECK_AUTH,
  AuthState,
  AuthActions,
} from './authTypes';

const initialState: AuthState = {
  isLogin: false,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
    case CHECK_AUTH:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
