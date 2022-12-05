import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
/*  WORKS NOW*/
const initialState: ProductsSliceType = {
  products: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export const userLog = (state: RootState) => state.user.user;

export default userSlice.reducer;
