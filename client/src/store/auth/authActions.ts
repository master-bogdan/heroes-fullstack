import {
  AUTH_SET,
  AUTH_ERROR,
  AuthActions,
  User,
} from './authTypes';
import axios, { AxiosError } from 'axios';
import { AppThunk } from 'store';
import { API } from 'services/api';

export const setLoginAction = (payload: boolean): AuthActions => ({
  type: AUTH_SET,
  payload,
});

export const setAuthErrorAction = (payload: boolean): AuthActions => ({
  type: AUTH_ERROR,
  payload,
});

export const loginAction = (user: User): AppThunk => async (dispatch) => {
  try {
    const { data } = await API.post('/login', user);

    if (typeof data.token !== 'undefined') {
      localStorage.setItem('authToken', data.token);

      dispatch(setLoginAction(true));
    } else {
      dispatch(setAuthErrorAction(true));
    }
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
      dispatch(setAuthErrorAction(true));
    } else {
      console.log(error);
      dispatch(setAuthErrorAction(true));
    }
  }
};
