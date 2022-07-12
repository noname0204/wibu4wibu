import type { User } from '~/types/api';
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
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL + '/auth' }),
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
  }),
});

const user = createSlice({
  name: 'user',
  initialState: {} as User,
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
  },
});
export const { useRegisterMutation, useLoginMutation } = userApi;
export default user.reducer;
