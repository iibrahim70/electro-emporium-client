import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  cartItems: any[] | null;
}

const initialState: ProductState = {
  cartItems: [],
};

export const productSlice = createSlice({
  name: "proudct",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const existingItem = state.cartItems?.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems?.push(action.payload);
      }
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
