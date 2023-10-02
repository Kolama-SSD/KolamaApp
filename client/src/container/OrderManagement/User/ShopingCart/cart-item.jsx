import React, { useContext } from 'react';
import { ShopContext } from '../../../../context/shop-context';

export const CartItem = (props) => {
  const { _id, title, price, cover } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
 

  return (
    <div className='cartItem'>
      <img src={cover} alt=''/>
      <div className='description'>
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${price}</p>
        <div className='countHandler'>
          <button className='minBtn' onClick={() => removeFromCart(_id)}>
            {' '}
            min{' '}
          </button>

          <input
            value={cartItems[_id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), _id)}
          />
          <button className='maxBtn' onClick={() => addToCart(_id)}>
            {' '}
            max{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
