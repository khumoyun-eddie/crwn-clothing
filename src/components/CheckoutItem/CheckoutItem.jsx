import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;
  const handleIncreaseItem = () => {
    addItemToCart(cartItem);
  };
  const handleDecreaseItem = () => {
    removeItemFromCart(cartItem);
  };
  const handleDeleteCartItem = ()=>{
    deleteItemFromCart(cartItem)
  }
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img
          src={imageUrl}
          alt={name}
        />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <span
          className='arrow'
          onClick={handleDecreaseItem}
        >
          &#10094;
        </span>
        <span className='value'>{quantity}</span>
        <span
          className='arrow'
          onClick={handleIncreaseItem}
        >
          &#10095;
        </span>
      </div>

      <span className='price'>${price}</span>
      <div className='remove-button' onClick={handleDeleteCartItem}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
