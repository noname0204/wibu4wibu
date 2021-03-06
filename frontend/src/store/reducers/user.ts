import type { User, UserResponse } from '~/types/api';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/store';
import { createSlice } from '@reduxjs/toolkit';

interface UserSlice {
  currentUser: User | null;
  accessToken: string | null;
}

const initialState: UserSlice = {
  currentUser: null,
  accessToken: localStorage.getItem('access_token'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAndAccessToken(state, { payload }: PayloadAction<UserResponse>) {
      const { accessToken, ...userInfo } = payload;
      localStorage.setItem('access_token', accessToken);
      state.currentUser = userInfo;
      state.accessToken = accessToken;
    },
    setUser(state, { payload }: PayloadAction<User>) {
      state.currentUser = payload;
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

export const { setUserAndAccessToken, setUser, setAccessToken, logOut } =
  userSlice.actions;
export default userSlice.reducer;
