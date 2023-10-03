import React, { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateProduct.css';
import newRequest from '../../../../utils/newRequest';
import { toast } from 'react-toastify';
// import upload from '../../../../utils/upload';
import { addReducer, INITIAL_STATE } from '../../../../reducers/addReducer.js';

const UpdateProduct = () => {
  const { productId } = useParams();
  //   const [singleFile, setSingleFile] = useState(undefined);
  //   const [files, setFiles] = useState([]);
  //   const [uploading, setUploading] = useState(false);
  const [dispatch] = useReducer(addReducer, INITIAL_STATE);
  const [titleTouched, setTitleTouched] = useState(false);
  const [descTouched, setDescTouched] = useState(false);
  const [shortDescTouched, setShortDescTouched] = useState(false);
  const [priceTouched, setPriceTouched] = useState(false);
  const [qtyTouched, setQtyTouched] = useState(false);
  const navigate = useNavigate();

  const handleTitleBlur = () => {
    setTitleTouched(true);
  };
  const handleDescBlur = () => {
    setDescTouched(true);
  };
  const handleShortDescBlur = () => {
    setShortDescTouched(true);
  };
  const handlePriceBlur = () => {
    setPriceTouched(true);
  };
  const handleQtyBlur = () => {
    setQtyTouched(true);
  };

  const validateForm = () => {
    if (state.title.trim() === '') {
      toast.error('Please Enter a Title.');
      return false;
    }
    if (state.cat.trim() === '') {
      toast.error('Please select a Category.');
      return false;
    }
    if (state.desc.trim() === '') {
      toast.error('Please Enter The Description.');
      return false;
    }
    if (state.shortDesc.trim() === '') {
      toast.error('Please Enter The Short Description.');
      return false;
    }
    if (state.price.trim() === '') {
      toast.error('Please Enter The Price.');
      return false;
    }
    if (state.availableQuntity.trim() === '') {
      toast.error('Please Enter The Quantity.');
      return false;
    }
    return true;
  };

  console.log('update productId', productId);
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
    // Fetch product data from the server using productId
    const fetchProduct = async () => {
      try {
        const response = await newRequest.get(`/adds/single/${productId}`);
        const product = response.data;
        console.log('product data', product);
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
  //   const handleUpload = async () => {
  //     setUploading(true);
  //     toast.success(' Uploading Images', {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //     try {
  //       const cover = await upload(singleFile);

  //       const images = await Promise.all(
  //         [...files].map(async (file) => {
  //           const url = await upload(file);
  //           return url;
  //         })
  //       );
  //       setUploading(false);
  //       dispatch({ type: 'ADD_IMAGES', payload: { cover, images } });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  console.log(state.cover);
  const handleFeature = (e) => {
    e.preventDefault();
    const feature = e.target.elements.feature.value;
    setState({
      ...state,
      features: [...state.features, feature],
      newFeature: '', // Reset the newFeature state
    });
    dispatch({
      type: 'ADD_FEATURE',
      payload: feature,
    });
    e.target.reset();
  };
  

  const handleUpdate = async (e) => {
    e.preventDefault();
    // if (!validateForm()) {

    // } else {
    try {
      // Send updated product data to the server for updating
      await newRequest.put(`/adds/${productId}`, state);
      navigate('/myproduct');
      toast.success('Product Update Successfully', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.log(error);
    }
    // }
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
                onBlur={handleTitleBlur}
              />{' '}
              {titleTouched && state.title.trim() === '' && (
                <p className='error'>Please enter a title.</p>
              )}
              <label htmlFor=''>Category</label>
              <select
                name='cat'
                id='cat'
                value={state.cat}
                onChange={handleChange}
              >
                <option value=''>Select Category</option>
                <option value='Masks '>Masks </option>
                <option value='Puppets '>Puppets </option>
                <option value='KolamItems'>Kolam Items</option>
                <option value='Handicraft '>Handicraft</option>
                <option value='Arts&Crafts'>Arts & Crafts</option>
              </select>
              <div className='images'>
                <div className='viewImg'>
                  <img src={state.cover} alt='Cover Photo' />
                </div>
                {/* <div className='imagesInputs'>
                  <label htmlFor='file' className='custom-file-upload'>
                    Choose Cover Image
                  </label>
                  <input
                    id='file'
                    type='file'
                    onChange={(e) => setSingleFile(e.target.files[0])}
                  />

                  <label htmlFor='file-upload' className='custom-file-upload'>
                    Upload Images
                  </label>
                  <input
                    id='file-upload'
                    type='file'
                    multiple
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </div>
                <button className='create' onClick={handleUpload}>
                  {uploading ? 'uploading' : 'Upload'}
                </button> */}
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
                onBlur={handleDescBlur}
              ></textarea>
              {descTouched && state.desc.trim() === '' && (
                <p className='error'>Please Enter The Description.</p>
              )}
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
                onBlur={handleShortDescBlur}
              ></textarea>
              {shortDescTouched && state.shortDesc.trim() === '' && (
                <p className='error'>Please Enter The Short Description.</p>
              )}

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
                onBlur={handleQtyBlur}
                required
              />
              {qtyTouched && state.availableQuntity.trim() === '' && (
                <p className='error'>Please Enter Available Quantity.</p>
              )}
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
                          features: state.features.filter(
                            (_, i) => i !== index
                          ),
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
                onBlur={handlePriceBlur}
                required
              />
              {priceTouched && state.price.trim() === '' && (
                <p className='error'>Please Enter Price Per Unit.</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
