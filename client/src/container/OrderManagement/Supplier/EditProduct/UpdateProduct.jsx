import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateProduct.css';
import newRequest from '../../../../utils/newRequest';

const UpdateProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    title: '',
    cat: '',
    desc: '',
    shortTitle: '',
    shortDesc: '',
    cover: '',
    deliveryTime: '',
    availableQuntity: '',
    features: [],
    price: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await newRequest.get(`/adds/single/${productId}`);
        const product = response.data;
        setState({
          title: product.title,
          cat: product.cat,
          desc: product.desc,
          cover: product.cover,
          shortTitle: product.shortTitle,
          shortDesc: product.shortDesc,
          deliveryTime: product.deliveryTime,
          availableQuntity: product.availableQuntity,
          features: product.features,
          price: product.price,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await newRequest.put(`/adds/${productId}`, state);
      navigate('/myproduct');
    } catch (error) {
      console.log(error);
    }
  };

  const handleFeature = (e) => {
    e.preventDefault();
    const feature = e.target.elements.feature.value;
    setState({
      ...state,
      features: [...state.features, feature],
    });
    e.target.reset();
  };

  return (
    <div className='add'>
      <div className='container'>
        <div className='titlep'></div>
        <h1>Update Product Details</h1>
        <form>
          <div className='sections'>
            <div className='info'>
              <label htmlFor=''>Title Of The Product</label>
              <input
                type='text'
                name='title'
                placeholder='e.g.Puppets and masks of Ambalangoda'
                value={state.title}
                onChange={handleChange}
              />
              <label htmlFor=''>Category</label>
              <select
                name='cat'
                id='cat'
                value={state.cat}
                onChange={handleChange}
              >
                <option value=''>Select Category</option>
                <option value='Masks'>Masks</option>
                <option value='Puppets'>Puppets</option>
                <option value='KolamItems'>Kolam Items</option>
                <option value='Handicraft'>Handicraft</option>
                <option value='Arts&Crafts'>Arts & Crafts</option>
              </select>
              <div className='images'>
                <div className='viewImg'>
                  <img src={state.cover} alt='Cover Photo' />
                </div>
              </div>
              <label htmlFor=''>Description</label>
              <textarea
                name='desc'
                id='desc'
                placeholder='Brief descriptions to introduce your Sell Items to customers'
                cols='0'
                rows='16'
                onChange={handleChange}
                value={state.desc}
              ></textarea>
              <button className='create' onClick={handleUpdate}>
                Update Product
              </button>
            </div>
            <div className='details'>
              <label htmlFor=''>Service Locations</label>
              <input
                type='text'
                name='shortTitle'
                id='shortTitle'
                placeholder='e.g. Ambalangoda'
                onChange={handleChange}
                value={state.shortTitle}
              />
              <label htmlFor=''>Short Description</label>
              <textarea
                name='shortDesc'
                onChange={handleChange}
                id='shortDesc'
                placeholder='Short description of your Online service'
                cols='30'
                rows='10'
                value={state.shortDesc}
              ></textarea>

              <label htmlFor=''>Delivery Time (e.g. 3 days)</label>
              <input
                type='number'
                name='deliveryTime'
                id='deliveryTime'
                onChange={handleChange}
                value={state.deliveryTime}
              />

              <label htmlFor=''>Available Quantity </label>
              <input
                type='number'
                name='availableQuntity'
                id='availableQuntity'
                onChange={handleChange}
                value={state.availableQuntity}
              />

              <label htmlFor=''>Add Specific Features</label>
              <form action='' className='add' onSubmit={handleFeature}>
                <input
                  type='text'
                  placeholder='e.g. Color: Red, Blue'
                  value={state.newFeature}
                  onChange={(e) =>
                    setState({ ...state, newFeature: e.target.value })
                  }
                />
                <button type='submit'>Add</button>
              </form>
              <div className='added-features'>
                {state.features.map((feature, index) => (
                  <div className='item' key={index}>
                    <button
                      onClick={() =>
                        setState({
                          ...state,
                          features: state.features.filter((_, i) => i !== index),
                        })
                      }
                    >
                      {feature} <span style={{ color: 'red' }}>X</span>
                    </button>
                  </div>
                ))}
              </div>

              <label htmlFor=''>Price (USD)</label>
              <input
                type='number'
                onChange={handleChange}
                name='price'
                placeholder='e.g. $ 40.00'
                value={state.price}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
