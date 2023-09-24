import "./cart-icon.styles.scss";
import ShopingBag from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const {cartCount, isActive, setIsActive} = useContext(CartContext)
  const toggleCart = () => setIsActive(!isActive)
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <img src={ShopingBag} alt="" className="shopping-icon"/>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
