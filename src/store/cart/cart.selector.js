import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectIsCartActive = createSelector(
  [selectCartReducer],
  (cart) => cart.isActive
);

export const selectCartCount = createSelector([selectCartItems], (cart) =>
  cart.reduce((a, c) => a + c.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cart) =>
  cart.reduce((a, c) => a + c.price * c.quantity, 0)
);
