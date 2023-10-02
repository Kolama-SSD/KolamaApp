import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import newRequest from '../../../../utils/newRequest';
// import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from the server using productId
    const fetchProduct = async () => {
      try {
        const response = await newRequest.get(`/adds/single/${productId}`);
        const productData = response.data;
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div className='product-details-container'>
      {product ? (
        <div className='row'>
          <div className='left-side'>
            <img
              className='imageLeft'
              src={product.cover}
              alt={product.title}
            />
          </div>
          <div className='right-side'>
            <h1 className='product-title'>{product.title}</h1>
            <p
              style={{
                textAlign: 'left',
                fontSize: '26px',
                color: 'var( --color-grey)',
              }}
            >
              Description
            </p>
            <div className='product-description' style={{ marginLeft: '5px' }}>
              {' '}
              {product.desc}
            </div>
            <div className='row2'>
              <div className='btnLeft'>
                <div className='product-features'>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className='product-cat' style={{ marginLeft: '8px' }}>
                  Category : {product.cat}
                </div>
                <div
                  className='product-availableQuntity'
                  style={{ marginLeft: '8px' }}
                >
                  Available Quantity : {product.availableQuntity}
                </div>
                <h2 className='product-price' style={{ marginLeft: '8px' }}>
                  Price : ${product.price}.00
                </h2>
              </div>
              <div className='btnRight'>
              <button onClick={goBack} style={{ backgroundColor: '#DCCA87' }} className='btn'>
  Continue Shopping
</button>

              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
