import { createSlice } from '@reduxjs/toolkit';
import { logIn, registerUser, logOut, refreshUser } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state, action) {
      console.log(action);
      state.isRefreshing = true;
    },
    [refreshUser.rejected](state, action) {
      console.log(action.payload);
      state.isRefreshing = false;
    },
    [refreshUser.fulfilled](state, action) {
      console.log(action.payload);
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
