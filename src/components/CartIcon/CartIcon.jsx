import { ReactComponent as ShoppingIcon } from "./shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const CartIcon = () => {
  const { isCartOpen,setIsCartOpen,cartCount } = useContext(CartContext);
  return (
    <div
      className='cart-icon-container'
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
