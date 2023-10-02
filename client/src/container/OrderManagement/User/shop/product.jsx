import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../../../context/shop-context';
import './/shopmain.css';
import RatingStars from './RatingStars';
import { useNavigate } from 'react-router-dom';


export const Product = (props) => {
  const { _id, title, price, cover, shortDesc, totalStars } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    if (cartItems && cartItems[_id]) {
      setCount(cartItems[_id]);
    }
  }, [cartItems]);

  const handleDetails = (productId) => {
    console.log('my productID', productId);
    navigate(`productdetails/${productId}`);
  };
  return (
    <div className='product'>
      <div className='product' key={_id}>
        <img className='product-image' src={cover} alt={cover} />
        <h4 className='product-name1'>{title}</h4>
        <RatingStars rating={totalStars} />

        <p>{shortDesc}</p>
        <span className='product-price'>{price}$</span>
        <div className='buttons'>
          <button className='btn' onClick={() => handleDetails(_id)}>Detail</button>
          <button className='btn' style={{ marginTop:"-200px" }} onClick={() => addToCart(_id)}>
            Add To Cart
           ( <div style={{ color: "red" }}>  {count} </div>)
          </button>
        </div>
      </div>
    </div>
  );
};
