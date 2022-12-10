import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productType } from "../reducers/types/productsSliceType";
import { RootState } from "../store";
import { dataUserFromServer, signInApi, signUpApi } from "./apiTypes/apiTypes";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.user?.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (typeof token === "string") {
        headers.set("authorization", `Bearer ${token}`);
        headers.set("Content-Type", "application/json");
      }

      return headers;
    },
  }),
  tagTypes: ["product", "user"],
  endpoints: (builder) => ({
    getAllProduct: builder.query<[productType], void>({
      // загружаем продукт по айдишнику(эндпоинт отсутствует)
      query: () => ({
        url: "/",
      }),
    }),
    getSingleProduct: builder.query<[productType], number>({
      query: (postId) => ({
        url: "/",
        params: {
          _id: postId,
        },
      }),
    }),
    signUp: builder.mutation<dataUserFromServer, signUpApi>({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["user"],
    }),
    signIn: builder.mutation<dataUserFromServer, signInApi>({
      query: (userData) => ({
        url: "/auth",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
// query: (ProductId: number) => ({
//   url: "/",
//   params: {
//     _id: ProductId,
//   },
