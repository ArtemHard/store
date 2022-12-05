import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserType } from "../reducers/types/userSliceTypes";

export const apiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/api/v1" }),
  endpoints: (builder) => ({
    logInUser: builder.query<UserType, object>({
      query: () => ({
        url: "/",
      }),
    }),
  }),
});
