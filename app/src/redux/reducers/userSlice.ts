import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserSliceType, UsersTypes } from "./types/userSliceTypes";

const initialState: UserSliceType = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UsersTypes>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    addToken: (state, action: PayloadAction<UsersTypes>) => {
      const token = action.payload;
      return { ...state, ...token };
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export const userLog = (state: RootState) => state.user.user;

export default userSlice.reducer;
