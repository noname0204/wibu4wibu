import type { User, UserResponse } from '~/types/api';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/store';
import { createSlice } from '@reduxjs/toolkit';

// const transformResponse = (response: unknown) => {
//   const newResponse = camelizeKeys(response as object) as User;
//   localStorage.setItem('access_token', newResponse.accessToken);
//   return newResponse;
// };

// export const userApi = createApi({
//   reducerPath: 'userApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_API_URL + '/auth',
//     credentials: 'include',
//   }),
//   endpoints: (build) => ({
//     register: build.mutation<User, LoginSchema>({
//       query: (data) => ({
//         url: '/register',
//         method: 'POST',
//         body: data,
//       }),
//       transformResponse,
//     }),
//     login: build.mutation<User, LoginSchema>({
//       query: (data) => ({
//         url: '/login',
//         method: 'POST',
//         body: data,
//       }),
//       transformResponse,
//     }),
//     refresh: build.mutation<User, void>({
//       query: () => ({
//         url: '/refresh',
//         method: 'POST',
//       }),
//       transformResponse,
//     }),
//     refreshToken: build.mutation<RefreshTokenResponse, void>({
//       query: () => ({
//         url: '/refresh-token',
//         method: 'POST',
//       }),
//       transformResponse,
//     }),
//     logout: build.mutation({
//       query: () => ({
//         url: '/logout',
//         method: 'DELETE',
//       }),
//     }),
//   }),
// });

interface UserSlice {
  currentUser: User | null;
  accessToken: string | null;
}

const initialState: UserSlice = {
  currentUser: null,
  accessToken: localStorage.getItem('access_token') || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAndAccessToken(state, action: PayloadAction<UserResponse>) {
      const { accessToken, ...userInfo } = action.payload;
      state.currentUser = userInfo;
      state.accessToken = accessToken;
    },
    setAccessToken(state, { payload }: PayloadAction<string>) {
      localStorage.setItem('access_token', payload);
      state.accessToken = payload;
    },
    logOut(state) {
      localStorage.removeItem('access_token');
      state.currentUser = null;
      state.accessToken = null;
    },
  },
});

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectAccessToken = (state: RootState) => state.user.accessToken;

export const { setUserAndAccessToken, setAccessToken, logOut } = userSlice.actions;
export default userSlice.reducer;
