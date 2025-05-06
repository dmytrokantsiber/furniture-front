import { createApi } from "@reduxjs/toolkit/query/react";

import baseQueryWithReauth from "../../utils/query/baseQueryWithReauth";

export const mainApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
