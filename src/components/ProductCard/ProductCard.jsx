import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Button from '../Button/Button'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
  const { imageUrl, name,price } = product;
  const {addItemToCart} = useContext(CartContext)
  
  const handleAddToCart = ()=>{
    addItemToCart(product)
  }
  return (
    <div className='product-card-container'>
      <img
        src={imageUrl}
        alt={name}
      />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType='inverted' onClick={handleAddToCart} >Add to cart</Button>
    </div>
  );
};

export default ProductCard;
