import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropDown = () => {
  const { cart, setCart } = useContext(CartContext);
  const { items } = cart;
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
