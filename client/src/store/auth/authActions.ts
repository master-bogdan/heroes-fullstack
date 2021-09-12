import {
  AUTH_SET,
  AUTH_SET_LOADING,
  AUTH_SET_REGISTER,
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

const setAuthLoadingAction = (payload: boolean): AuthActions => ({
  type: AUTH_SET_LOADING,
  payload,
});

const setAuthRegisterAction = (payload: boolean): AuthActions => ({
  type: AUTH_SET_REGISTER,
  payload,
});

export const setAuthErrorAction = (payload: string): AuthActions => ({
  type: AUTH_ERROR,
  payload,
});

export const loginAction = (user: User): AppThunk => async (dispatch) => {
  try {
    dispatch(setAuthLoadingAction(true));
    const { data } = await API.post('/login', user);

    if (typeof data.token !== 'undefined') {
      localStorage.setItem('authToken', data.token);

      dispatch(setLoginAction(true));
    } else {
      dispatch(setAuthErrorAction('User not exist!'));
    }
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
      if (error.response?.status === 404) {
        dispatch(setAuthErrorAction('Wrong email or user not exist!'));
      } else if (error.response?.status === 403) {
        dispatch(setAuthErrorAction('Wrong password!'));
      }
    } else {
      console.log(error);
      dispatch(setAuthErrorAction('Server error, try please later'));
    }
  } finally {
    dispatch(setAuthLoadingAction(false));
  }
};

export const registerAction = (userData: User): AppThunk => async (dispatch) => {
  try {
    dispatch(setAuthLoadingAction(true));
    const { data } = await API.post('/register', userData);

    if (data) {
      dispatch(setAuthRegisterAction(true));
    }
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
      if (error.response?.status === 401) {
        dispatch(setAuthErrorAction('User with this email exist!'));
      }
    } else {
      console.log(error);
      dispatch(setAuthErrorAction('Server error, try please later'));
    }
  } finally {
    dispatch(setAuthLoadingAction(false));
  }
};
