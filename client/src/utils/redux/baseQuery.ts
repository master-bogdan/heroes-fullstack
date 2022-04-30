import {
  createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constants/urls';

export const customBaseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await customBaseQuery(args, api, extraOptions);

  const logoutArgs = {
    method: 'POST',
    url: '/logout',
  };

  if (result.error && result.error.status === 401) {
    const refreshResult = await customBaseQuery('/token', api, extraOptions);

    if (refreshResult.data) {
      const { accessToken } = refreshResult.data as { accessToken: string };

      localStorage.setItem('accessToken', accessToken);

      result = await customBaseQuery(args, api, extraOptions);
    } else {
      const logout = await customBaseQuery(logoutArgs, api, extraOptions);

      if (logout) {
        // api.dispatch();
        localStorage.removeItem('accessToken');
      }
    }
  }

  return result;
};

export const baseQueryWithParams = (reducerPath: string, tags?: string[]) => createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
  reducerPath,
  tagTypes: tags?.length ? tags : [],
});
