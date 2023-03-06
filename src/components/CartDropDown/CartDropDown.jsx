import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import {CartDropDownContainer,EmptyMessage,CartItems } from './CartDropDown.styles'

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckout=()=>{
    navigate('/checkout')
  }
  
  return (
    <CartDropDownContainer >
      <CartItems>
        {cartItems.length ? cartItems.map((item) => (
          <CartItem
            cartItem={item}
            key={item.id}
          />
        )) : <EmptyMessage>Your cart is empty</EmptyMessage> }
      </CartItems>
      <Button onClick={goToCheckout}>Go to checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
