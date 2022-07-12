import type { User, RefreshTokenResponse } from '~/types/api';
import type { LoginSchema } from '~/validations/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';
import { camelizeKeys } from 'humps';

const transformResponse = (response: unknown) => {
  const newResponse = camelizeKeys(response as object) as User;
  localStorage.setItem('access_token', newResponse.accessToken);
  return newResponse;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + '/auth',
    credentials: 'include',
  }),
  endpoints: (build) => ({
    register: build.mutation<User, LoginSchema>({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
      transformResponse,
    }),
    login: build.mutation<User, LoginSchema>({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
      transformResponse,
    }),
    refresh: build.mutation<User, void>({
      query: () => ({
        url: '/refresh',
        method: 'POST',
      }),
      transformResponse,
    }),
    refreshToken: build.mutation<RefreshTokenResponse, void>({
      query: () => ({
        url: '/refresh-token',
        method: 'POST',
      }),
      transformResponse,
    }),
    logout: build.mutation({
      query: () => ({
        url: '/logout',
        method: 'DELETE',
      }),
    }),
  }),
});

const user = createSlice({
  name: 'user',
  initialState: {} as Partial<User>,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.id = payload.id;
      state.username = payload.username;
      state.avatarURL = payload.avatarURL;
      state.role = payload.role;
      state.accessToken = payload.accessToken;
    });

    builder.addMatcher(
      userApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.id = payload.id;
        state.username = payload.username;
        state.avatarURL = payload.avatarURL;
        state.role = payload.role;
        state.accessToken = payload.accessToken;
      }
    );
    builder.addMatcher(userApi.endpoints.refresh.matchFulfilled, (state, { payload }) => {
      state.id = payload.id;
      state.username = payload.username;
      state.avatarURL = payload.avatarURL;
      state.role = payload.role;
      state.accessToken = payload.accessToken;
    });
    builder.addMatcher(
      userApi.endpoints.refreshToken.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      }
    );
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, (state) => {
      delete state.id;
      delete state.username;
      delete state.avatarURL;
      delete state.role;
      delete state.accessToken;
    });
  },
});
export const {
  useRegisterMutation,
  useLoginMutation,
  useRefreshMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
} = userApi;
export default user.reducer;
