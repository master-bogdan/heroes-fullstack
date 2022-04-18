import { baseQueryParams } from 'utils/redux/baseQuery';

export const authService = baseQueryParams('auth').injectEndpoints({
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
  overrideExisting: false,
});

export const {
  useLoginQuery,
} = authService;
