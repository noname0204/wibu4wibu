import type { RootState } from '~/store';
import type { RefreshTokenResponse } from '~/types/api';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setAccessToken } from '~/store/reducers/user';
import { camelizeKeys } from 'humps';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).user.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const { data: refreshResult, error } = await baseQuery(
      '/auth/refresh-token',
      api,
      extraOptions
    );

    if (error?.status === 401) {
      api.dispatch(logOut());
    } else if (refreshResult) {
      const { accessToken } = camelizeKeys(
        refreshResult as object
      ) as RefreshTokenResponse;
      api.dispatch(setAccessToken(accessToken));
      result = await baseQuery(args, api, extraOptions);
    }
  }

  result.data = camelizeKeys(result.data as object);
  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});

export default apiSlice;
