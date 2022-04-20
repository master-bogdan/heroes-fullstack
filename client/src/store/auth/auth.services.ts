import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from 'utils/redux/baseQuery';

export const authServices = createApi({
  baseQuery: customBaseQuery,
  reducerPath: 'auth',
  endpoints: (builder) => ({
    login: builder.query<any, any>({
      query: () => ({
        url: '/auth/login',
        method: 'POST',
      }),
    }),
    logout: builder.query<any, any>({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
    }),
    register: builder.query<any, any>({
      query: () => ({
        url: '/auth/login',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLoginQuery,
} = authServices;
