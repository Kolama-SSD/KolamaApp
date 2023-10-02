import { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    console.log(PRODUCTS);
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product._id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const countCartItems = () => {
    for (const item in cartItems) {
      let i;
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        for (i = 0; i < itemInfo.length; i++) {
          i++;
        }
      }
      console.log(i);

      return i;
    }
  };
  const addToCart = (itemId) => {
    console.log(itemId);
    console.log(allItems);
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev.hasOwnProperty(itemId) ? prev[itemId] + 1 : 1,
    }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    setAllItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    countCartItems,
    cartItems,
    allItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
