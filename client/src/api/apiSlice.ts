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
    // Set authorization header before request to server
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

  // Send refresh token if access token expired
  if (result.error?.status === 403) {
    const { data: refreshResult, error } = await baseQuery(
      '/auth/refresh-token',
      api,
      extraOptions
    );

    // Logout if refresh token expired or invalid
    if (error?.status === 401) {
      api.dispatch(logOut());
    } else if (refreshResult) {
      // Transform access token from snack_case to camelCase
      const { accessToken } = camelizeKeys(
        refreshResult as object
      ) as RefreshTokenResponse;

      // Set new access token
      api.dispatch(setAccessToken(accessToken));

      // Refetch after get new access token
      result = await baseQuery(args, api, extraOptions);
    }
  }

  // Transform response from snack_case to camelCase before return
  result.data = camelizeKeys(result.data as object);
  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});

export default apiSlice;
