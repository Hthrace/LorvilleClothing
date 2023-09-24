/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: {
    isActive: null,
    items: [],
    itemCount: null,
  },
  setCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    isActive: false,
    items: [],
    itemCount: 0,
  });
  const value = { cart, setCart };
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
