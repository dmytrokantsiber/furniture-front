import { createSlice } from "@reduxjs/toolkit";

import { authApi } from "../../api/auth/auth.api";
import { IAuthSliceState } from "../../../types/auth.types";

const initialState: IAuthSliceState = {
  user: {},
  isAuth: false,
  isLoading: false,
  userAuthCheck: true,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = {};
      state.isAuth = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          localStorage.setItem("token", payload.accessToken);
          state.user = { ...payload.user };
          state.isAuth = true;
        }
      )
      .addMatcher(authApi.endpoints.logoutUser.matchFulfilled, (state) => {
        localStorage.removeItem("token");
        state.user = {};
        state.isAuth = false;
      })
      .addMatcher(
        authApi.endpoints.checkUser.matchFulfilled,
        (state, { payload }) => {
          state.isAuth = true;
          localStorage.setItem("token", payload.accessToken);
          state.user = { ...payload.user };
          state.error = null;
          state.userAuthCheck = false;
        }
      )
      .addMatcher(authApi.endpoints.checkUser.matchRejected, (state) => {
        state.isAuth = false;
        state.error = null;
        state.user = {};
        state.userAuthCheck = false;
        localStorage.removeItem("token");
      })
      .addMatcher(
        authApi.endpoints.updateUserInfo.matchFulfilled,
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.surname = payload.user.surname;
        }
      );
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
