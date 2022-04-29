import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from 'utils/redux/baseQuery';

export const authServices = createApi({
  baseQuery: customBaseQuery,
  reducerPath: 'api/auth',
  endpoints: (builder) => ({
    login: builder.mutation<{
      user: any, accessToken: any
    }, { nickname: string; password: string }>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation<any, any>({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
    }),
    register: builder.mutation<any, any>({
      query: () => ({
        url: '/auth/login',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = authServices;
