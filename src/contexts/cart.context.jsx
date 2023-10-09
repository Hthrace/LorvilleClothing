/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

export const CartContext = createContext({
  isActive: null,
  setIsActive: () => null,
  cartItems: [],
  updateCart: () => {},
  cartCount: 0,
  updateQuantity: () => {},
  removeCartItem: () => {},
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_IS_CART_ACTIVE: "SET_IS_CART_ACTIVE",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  isActive: null,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_ACTIVE:
      return {
        ...state,
        isActive: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isActive, cartItems, cartCount, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (cartItems) => {
    const newCartCount = cartItems.reduce((a, c) => a + c.quantity, 0);

    const newCartTotal = cartItems.reduce(
      (a, c) => a + c.price * c.quantity,
      0
    );

    const payload = {
      cartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const updateCart = (newItem) => {
    const newCartItems = checkCart(cartItems, newItem);
    updateCartItemsReducer(newCartItems);
  };

  const updateQuantity = (item) => {
    const newCartItems = itemQuantityDerease(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const removeCartItem = (item) => {
    const newCartItems = itemRemoval(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const setIsActive = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_ACTIVE, bool));
  };

  const value = {
    isActive,
    cartItems,
    updateCart,
    setIsActive,
    cartCount,
    updateQuantity,
    removeCartItem,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
