import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isActive: null,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setCartActive(state, action) {
      state.isActive = action.payload;
    },
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const { setCartActive, setCartItems } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
