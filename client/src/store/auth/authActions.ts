import {
  SET_AUTH,
  CHECK_AUTH,
  AuthActions,
  User,
  AuthState,
} from './authTypes';
import axios from 'axios';
import { AppThunk } from 'store';

export const setLoginAction = (payload: AuthState): AuthActions => ({
  type: SET_AUTH,
  payload,
});

export const checkAuthAction = (payload: AuthState): AuthActions => ({
  type: CHECK_AUTH,
  payload,
});

export const loginAction = (user: User): AppThunk => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_LOGIN}`,
      user,
    );

    if (data.token) {
      dispatch(setLoginAction({
        isLogin: true,
        token: data.token,
      }));
    }

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
