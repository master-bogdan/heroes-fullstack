import {
  AUTH_SET,
  AUTH_SET_LOADING,
  AUTH_SET_REGISTER,
  AUTH_ERROR,
  AuthState,
  AuthActions,
} from './authTypes';

const initialState: AuthState = {
  isLogin: false,
  isLoading: false,
  isRegister: false,
  error: '',
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
    case AUTH_SET:
      return {
        ...state,
        isLogin: action.payload,
      };
    case AUTH_SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case AUTH_SET_REGISTER:
      return {
        ...state,
        isRegister: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
