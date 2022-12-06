import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface basketSliceType {
  basket: [productBasket] | [];
}
interface productBasket {
  productId: number;
  title: string;
  img: string[];
  count: number; // Количество общее в корзине
  price: number;
}
interface addBasketProduct {
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
    addProduct: (state, action: PayloadAction<addBasketProduct>) => {
      const basket = state.basket;
      const payloadObj = action.payload;
      if (basket.length) {
        basket.filter((product) => {
          if (product.productId === payloadObj.productId) {
          }
        });
      }
    },
  },
});
