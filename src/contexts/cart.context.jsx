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

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(cartItems.reduce((a, c) => a + c.price * c.quantity, 0));
  }, [cartItems]);

  const updateCart = (newItem) => {
    setCartItems(checkCart(cartItems, newItem));
  };

  const updateQuantity = (item) => {
    setCartItems(itemQuantityDerease(cartItems, item));
  };

  const removeCartItem = (item) => {
    setCartItems(itemRemoval(cartItems, item));
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
