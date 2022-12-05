import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ProductsSliceType, productType } from "./types/productsSliceType";

const initialState: ProductsSliceType = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<[productType]>) => {
      state.products = action.payload;
    },
  },
});

export const { addProducts } = productsSlice.actions;

export const getProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
