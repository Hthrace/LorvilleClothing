import ShopingBag from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { cartCount, isActive, setIsActive } = useContext(CartContext);
  const toggleCart = () => setIsActive(!isActive);
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon src={ShopingBag} alt="Shopping Cart Icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
