/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  updateCart,
  updateQuantity,
  removeCartItem,
} from "../../store/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Value,
  Arrow,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = item;
  const increaseQuantity = () => dispatch(updateCart(cartItems, item));
  const decreaseQuantity = () => dispatch(updateQuantity(cartItems, item));
  const removeItem = () => dispatch(removeCartItem(cartItems, item));
  const cartItems = useSelector(selectCartItems);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>

      <Quantity>
        <Arrow onClick={decreaseQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseQuantity}>&#10095;</Arrow>
      </Quantity>

      <Price> ${price}</Price>
      <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
