import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productType } from "../reducers/types/productsSliceType";
import { dataUserFromServer, signInApi, signUpApi } from "./apiTypes/apiTypes";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/api/v1" }),
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
