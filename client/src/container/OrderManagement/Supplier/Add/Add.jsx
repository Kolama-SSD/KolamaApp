import React, { useReducer, useState } from 'react';
import './Add.css';
import { addReducer, INITIAL_STATE } from '../../../../reducers/addReducer.js';
import upload from '../../../../utils/upload';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../../../utils/newRequest';
import { toast } from 'react-toastify';

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [state, dispatch] = useReducer(addReducer, INITIAL_STATE);
  const [titleTouched, setTitleTouched] = useState(false);
  const [descTouched, setDescTouched] = useState(false);
  const [shortDescTouched, setShortDescTouched] = useState(false);
  const [priceTouched, setPriceTouched] = useState(false);
  const [qtyTouched, setQtyTouched] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    });
  };
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

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_FEATURE',
      payload: e.target[0].value,
    });
    e.target[0].value = '';
  };

  const handleUpload = async () => {
    setUploading(true);
    toast.success(' Uploading Images', {
      position: toast.POSITION.TOP_RIGHT,
    });
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: 'ADD_IMAGES', payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const mutation = useMutation({
    mutationFn: (add) => {
      return newRequest.post('/adds', add);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myProducts']);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
      
    }

    mutation.mutate(state);
    navigate('/myproduct');
    toast.success(' New Product Added Successfully', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  console.log(state);
  return (
    <div className='add'>
      <div className='container'>
        <div className='titlep'></div>
        <h1>Add New Product</h1>

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
              required
            />
            {titleTouched && state.title.trim() === '' && (
              <p className='error'>Please enter a title.</p>
            )}
            <label htmlFor=''>Category</label>
            <select name='cat' id='cat' onChange={handleChange}>
              <option value='NOT select '>Select Category</option>
              <option value='Masks '>Masks </option>
              <option value='Puppets '>Puppets </option>
              <option value='KolamItems'>Kolam Items</option>
              <option value='Handicraft '>Handicraft</option>
              <option value='Arts&Crafts'>Arts & Crafts</option>
            </select>

            <div className='images'>
              <div className='imagesInputs'>
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
              </button>
            </div>
            <label htmlFor=''>Description</label>
            <textarea
              name='desc'
              id=''
              placeholder='Brief descriptions to introduce your Sell Items to customers'
              cols='0'
              rows='16'
              onChange={handleChange}
              value={state.desc}
              onBlur={handleDescBlur}
              required
            ></textarea>
            {descTouched && state.desc.trim() === '' && (
              <p className='error'>Please Enter The Description.</p>
            )}

            <button
              className='create'
              onClick={handleSubmit}
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? 'Creating...' : 'Create'}
            </button>
          </div>
          <div className='details'>
            <label htmlFor=''>Service Locations</label>
            <input
              type='text'
              name='shortTitle'
              placeholder='e.g. Ambalangoda'
              onChange={handleChange}
              
            />
            <label htmlFor=''>Short Description</label>
            <textarea
              name='shortDesc'
              onChange={handleChange}
              id=''
              placeholder='Short description of your Online service'
              cols='30'
              rows='10'
              value={state.shortDesc}
              onBlur={handleShortDescBlur}
              required
            ></textarea>
            {shortDescTouched && state.shortDesc.trim() === '' && (
              <p className='error'>Please Enter The Short Description.</p>
            )}
            <label htmlFor=''>Delivery Time (e.g. 3 days)</label>
            <input type='number' name='deliveryTime' onChange={handleChange} />
            <label htmlFor=''>Available Quantity </label>
            <input
              type='number'
              name='availableQuntity'
              
              onChange={handleChange}
              value={state.availableQuntity}
              onBlur={handleQtyBlur}
           required
            />
            {qtyTouched && state.availableQuntity.trim() === '' && (
              <p className='error'>Please Enter Available Quantity.</p>
            )}

            
            <label htmlFor=''>Add Specific Features </label>
            <form action='' className='add' onSubmit={handleFeature}>
              <input type='text' placeholder='e.g. Color: Red, Blue' />
              <button type='submit'>Add </button>
            </form>
            <div className='addedFeatures'>
              {state?.features?.map((f) => (
                <div className='item' key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FEATURE', payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
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
      </div>
    </div>
  );
};

export default Add;
