import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface basketSliceType {
  basket: productBasketType[];
}
interface productBasketType {
  productId: number;
  count: number;
}

const initialState: basketSliceType = {
  basket: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductBasket: (state, action: PayloadAction<productBasketType>) => {
      const basket = state.basket;
      const payloadObj = action.payload;
      if (basket.length > 0) {
        const product = basket.find(
          (product) => product.productId === payloadObj.productId
        );
        if (product) {
          product.count += payloadObj.count;
        }
      } else if (basket.length === 0) basket.push(payloadObj);
      return state;
    },
    removeProductBasket: (state, action: PayloadAction<productBasketType>) => {
      const basket = state.basket;
      const payloadObj = action.payload;
      if (basket.length > 0) {
        const index = basket.findIndex(
          (product) => product.productId === payloadObj.productId
        );
        if (index !== -1) {
          basket[index].count -= payloadObj.count;
          if (basket[index].count <= 0) {
            basket.splice(index, 1);
          }
        }
      } else if (basket.length === 0) return state;
      return state;
    },
  },
});

export const { addProductBasket, removeProductBasket } = basketSlice.actions;

export const getProductsBasket = (state: RootState) => state.basket.basket;

export default basketSlice.reducer;
