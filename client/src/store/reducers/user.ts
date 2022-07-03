import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { User } from '~/types/api';

interface UserSlice {
  currentUser: User | null;
  isFetching: boolean;
}

const initialState: UserSlice = {
  currentUser: null,
  isFetching: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginFetching(state) {
      state.isFetching = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFail(state) {
      state.isFetching = false;
    },
  },
});

export const { loginFetching, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
