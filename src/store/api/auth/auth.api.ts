import { mainApi } from "../api";
import {
  ILogoutInputs,
  ILogoutResponse,
  IRefreshResponse,
  ISignInInputs,
  ISignInResponse,
  ISignUpInputs,
  ISignUpResponse,
  IUpdateUserInfo,
  IUserProfileInfo,
} from "../../../types/auth.types";

export const authApi = mainApi
  .enhanceEndpoints({ addTagTypes: ["Order"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      registerUser: builder.mutation<ISignUpResponse, ISignUpInputs>({
        query: (data) => {
          return {
            url: "registration",
            method: "POST",
            body: data,
          };
        },
      }),
      loginUser: builder.mutation<ISignInResponse, ISignInInputs>({
        query: (data) => {
          return {
            url: "login",
            method: "POST",
            credentials: "include",
            body: data,
          };
        },
        invalidatesTags: ["Order"],
      }),
      logoutUser: builder.mutation<ILogoutResponse, ILogoutInputs>({
        query: (data) => {
          return {
            url: "logout",
            method: "POST",
            credentials: "include",
            body: data,
          };
        },
      }),
      checkUser: builder.query<IRefreshResponse, void>({
        query: () => {
          return {
            url: "refresh",
            method: "GET",
            credentials: "include",
          };
        },
      }),

      updateUserInfo: builder.mutation<IUpdateUserInfo, IUserProfileInfo>({
        query: (data) => {
          return {
            url: "updateUserInfo",
            method: "PATCH",
            credentials: "include",
            body: data,
          };
        },
      }),
    }),
  });

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useCheckUserQuery,
  useUpdateUserInfoMutation,
} = authApi;
