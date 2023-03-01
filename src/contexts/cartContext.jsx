import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find a cartItem to remove
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  // check if item has 1 quantity, remove it from the cart
  if (existingCartItem.quantity === 1) return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  // return back cartItems with reduced quantity of matched cart item
  return cartItems.map((item) => (item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item));
};

const deleteCartItem = (cartItems, cartItemToDelete) => cartItems.filter((item) => item.id !== cartItemToDelete.id);

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
  setIsCartOpen: () => Boolean,
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  deleteCartItem: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const deleteItemFromCart = (cartItemToDelete) => {
    setCartItems(deleteCartItem(cartItems, cartItemToDelete));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    cartTotal,
    deleteItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
