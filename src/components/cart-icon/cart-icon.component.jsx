import ShopingBag from "../../assets/shopping-bag.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsCartActive,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsActive } from "../../store/cart/cart.action";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isActive = useSelector(selectIsCartActive);
  const toggleCart = () => dispatch(setIsActive(!isActive));
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon src={ShopingBag} alt="Shopping Cart Icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
