import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productType } from "../reducers/types/productsSliceType";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/api/v1" }),
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
  }),
});
// query: (ProductId: number) => ({
//   url: "/",
//   params: {
//     _id: ProductId,
//   },
