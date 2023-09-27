/* eslint-disable react/prop-types */
import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ item }) => {
  const { updateCart, updateQuantity, removeCartItem } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = item;
  const increaseQuantity = () => updateCart(item);
  const decreaseQuantity = () => updateQuantity(item);
  const removeItem = () => removeCartItem(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaseQuantity}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseQuantity}>
          &#10095;
        </div>
      </span>

      <span className="price"> ${price}</span>
      <div className="remove-button" onClick={removeItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
