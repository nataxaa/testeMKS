import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;