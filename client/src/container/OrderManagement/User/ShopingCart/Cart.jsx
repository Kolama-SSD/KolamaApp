import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../../../context/shop-context';
import { CartItem } from './cart-item';
import './Cart.css';
import './shoppingCart.css';
// import { PRODUCTS } from '../../../../products';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, allItems } = useContext(ShopContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(allItems);
    allItems.map((product) => {
      if (cartItems[product._id]) {
        console.log(product);
      }
    });
  }, []);
  useEffect(() => {
	let sum=0;
	allItems.map((product) => {
      if (cartItems[product._id]) {
        sum = sum + product.price*cartItems[product._id]
      }
    });
    setTotalAmount(
      sum
    );
  }, [cartItems]);

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cart'>
        {allItems.map((product) => {
          return cartItems[product._id] && <CartItem data={product} />;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className='checkout'>
          <h4> Subtotal: ${totalAmount} </h4>
          <button onClick={() => navigate('/shop')}> Continue Shopping </button>
          <button
            onClick={() => {
              // checkout();
              navigate('/checkout');
            }}
          >
            {' '}
            Checkout{' '}
          </button>
        </div>
      ) : (
        <h3> Your Shopping Cart is Empty</h3>
      )}
    </div>
  );
};

export default Cart;