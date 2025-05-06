import { Mutex } from "async-mutex";

import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { API_URL } from "../constants";
import { logoutUser } from "../../store/slices/auth/auth.slice";

interface RefreshResponseData {
  accessToken: string;
}

function isRefreshResponseData(data: unknown): data is RefreshResponseData {
  if (data) {
    return typeof data === "object" && "accessToken" in data;
  }
  return false;
}

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    headers.set("authorization", `Bearer ${localStorage.getItem("token")}`);
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          {
            url: "refresh",
            method: "GET",
            credentials: "include",
          },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          if (isRefreshResponseData(refreshResult.data)) {
            localStorage.setItem("token", refreshResult.data.accessToken);
            result = await baseQuery(args, api, extraOptions);
          }
        } else {
          api.dispatch(logoutUser());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
export default baseQueryWithReauth;
