import { createContext, useEffect, useReducer, useState } from "react";

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

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "set_cart_items",
  SET_IS_CART_OPEN: "set_is_cart_open",
};

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type: ${type} in cartReducer`);
  }
};

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
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { cartItems, cartTotal, cartCount, isCartOpen } = state;

  const updateCartItemsReducer = (newCartItems) => {
    //1) generate newCartCount
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    //2) generate newCartTotal
    const newCartTotal = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    //3) send payload to cartReducer
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    // setCartItems(addCartItem(cartItems, productToAdd));
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const deleteItemFromCart = (cartItemToDelete) => {
    const newCartItems = deleteCartItem(cartItems, cartItemToDelete);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
