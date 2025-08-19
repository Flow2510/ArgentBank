import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    token: null,
    info: null,
  },
  reducers: {
    login: (state) => {
        state.loggedIn = true;
    },
    logout: (state) => {
        state.loggedIn = false;
        state.token = null;
    },
    setToken: (state, action) => {
        state.token = action.payload;
    },
    setInfo: (state, action) => {
        state.info = action.payload;
    }
  },
});

export const { login, logout, setToken, setInfo } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});