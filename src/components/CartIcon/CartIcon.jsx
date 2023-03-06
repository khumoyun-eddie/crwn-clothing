import "./CartIcon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./CartIcon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
