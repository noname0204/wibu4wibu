import { UserResponse } from '~/types/api';
import { LoginSchema } from '~/validations/auth';
import apiSlice from './apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<UserResponse, LoginSchema>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    register: build.mutation<UserResponse, LoginSchema>({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    refresh: build.mutation<UserResponse, void>({
      query: () => ({
        url: '/auth/refresh',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useRefreshMutation } = authApiSlice;
