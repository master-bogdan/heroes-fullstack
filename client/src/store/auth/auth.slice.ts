import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authServices } from './auth.services';
import { AuthState } from './auth.types';

const initialState: AuthState = {
  isLogin: false,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state) {
      state.isLogin = true;
    },
    setLogout(state) {
      state.isLogin = false;
    },
    setRegister(state) {
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authServices.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        localStorage.setItem('accessToken', payload.accessToken);
        state.user = payload.user;
      },
    );
  },
});

export const authReducer = authSlice.reducer;
