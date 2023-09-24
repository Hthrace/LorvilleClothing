import "./cart-icon.styles.scss";
import ShopingBag from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const {cart, setCart} = useContext(CartContext)
  const toggleActiveCart = () => setCart((curr)=>{return {...curr, isActive:!curr.isActive}})
  return (
    <div className="cart-icon-container" onClick={toggleActiveCart}>
      <img src={ShopingBag} alt="" className="shopping-icon"/>
      <span className="item-count">{cart.itemCount}</span>
    </div>
  );
};

export default CartIcon;
