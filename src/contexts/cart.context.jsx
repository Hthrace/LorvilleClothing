/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

const checkCart = (cartItems, newItem) => {
  const isItem = cartItems.find((i) => i.id === newItem.id);
  if (isItem) {
    return cartItems.map((i) =>
      i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const CartContext = createContext({
  isActive: null,
  setIsActive: () => null,
  cartItems: [],
  updateCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cartItems]);

  const updateCart = (newItem) => {
    setCartItems(checkCart(cartItems, newItem));
  };
  const value = { isActive, cartItems, updateCart, setIsActive, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
