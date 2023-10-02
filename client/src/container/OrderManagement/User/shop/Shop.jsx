import React, { useState, useContext } from 'react';

import newRequest from '../../../../utils/newRequest';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Product } from './product';
import getCurrentUser from '../../../../utils/getCurrentUser.js';

import './Shop.css';
import './shopmain.css';
import { ShopContext } from '../../../../context/shop-context';

const Shop = () => {
  const [query, setQuery] = useState('');
  const currentUser = getCurrentUser();

  // const queryClient = useQueryClient();
  const { setAllItems } = useContext(ShopContext);
  const { isLoading, error, data } = useQuery({
    queryKey: ['myProducts'],
    queryFn: () =>
      newRequest.get(`/adds?`).then((res) => {
        setAllItems(res.data);
        return res.data;
      }),
  });

  return (
    <div className='shop'>
    

      {isLoading ? (
        'loading'
      ) : error ? (
        'error'
      ) : (
        <div>
          <div className='shopTitle'>
            <h1 style={{ marginTop:"-10vh" }}>Kolama Online Store</h1>
          </div>
          <input
            type='text'
            placeholder='Search...'
            className='search'
            onChange={(e) => setQuery(e.target.value)}
          />
          
          <div className='products' >
          {data
            ?.filter((data) => data.title.toLowerCase().includes(query))
            .map((data) => (
              <Product key={data.id} data={data} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
