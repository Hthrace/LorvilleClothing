import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const checkCart = (cartItems, newItem) => {
  const isItem = cartItems.find((i) => i.id === newItem.id);
  if (isItem) {
    return cartItems.map((i) =>
      i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};

const itemQuantityDerease = (cartItems, item) => {
  const isItem = cartItems.find((i) => i.id === item.id);
  if (isItem.quantity <= 1) {
    return cartItems.filter((cartItem) => cartItem.id != item.id);
  }
  return cartItems.map((i) =>
    i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
  );
};

const itemRemoval = (cartItems, item) =>
  cartItems.filter((i) => i.id !== item.id);

export const updateCart = (cartItems, newItem) => {
  const newCartItems = checkCart(cartItems, newItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const updateQuantity = (cartItems, item) => {
  const newCartItems = itemQuantityDerease(cartItems, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeCartItem = (cartItems, item) => {
  const newCartItems = itemRemoval(cartItems, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsActive = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_ACTIVE, bool);
};
