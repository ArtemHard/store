import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { basketSlice } from "./reducers/basketSlice";
import { productsSlice } from "./reducers/productsSlice";
import { userSlice } from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productsSlice.reducer,
    basket: basketSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
