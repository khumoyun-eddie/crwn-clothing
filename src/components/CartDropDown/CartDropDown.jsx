import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import Button from "../button/Button";
import CartItem from "../CartItem/CartItem";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckout=()=>{
    navigate('/checkout')
  }
  
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem
            cartItem={item}
            key={item.id}
          />
        ))}
      </div>
      <Button onClick={goToCheckout}>Go to checkout</Button>
    </div>
  );
};

export default CartDropDown;
