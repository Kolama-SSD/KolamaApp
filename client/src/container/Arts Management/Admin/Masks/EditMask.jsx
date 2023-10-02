import React, { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditMask.css';
import newRequest from '../../../../utils/newRequest';
import { toast } from 'react-toastify';
// import upload from '../../../../utils/upload';
import { addReducer, INITIAL_STATE } from '../../../../reducers/addReducer.js';

const EditMask = () => {
    const { id } = useParams();
    //   const [singleFile, setSingleFile] = useState(undefined);
    //   const [files, setFiles] = useState([]);
    //   const [uploading, setUploading] = useState(false);
    const [dispatch] = useReducer(addReducer, INITIAL_STATE);
    const [titleTouched, setTitleTouched] = useState(false);
    const [descTouched, setDescTouched] = useState(false);
    const navigate = useNavigate();

    const handleTitleBlur = () => {
        setTitleTouched(true);
    };
    const handleDescBlur = () => {
        setDescTouched(true);
    };
    console.log("up id", id)
    const validateForm = () => {
        if (state.title.trim() === '') {
            toast.error('Please Enter a Mask Name.');
            return false;
        }
        if (state.desc.trim() === '') {
            toast.error('Please Enter The Description.');
            return false;
        }
        return true;
    };

    const [state, setState] = useState({
        title: '',
        desc: '',
        cover: '',
    });

    useEffect(() => {
        // Fetch product data from the server using productId
        const fetchMasks = async () => {
            try {
                const response = await newRequest.get(`/addsmask/single/${id}`);
                const mask = response.data;
                setState({
                    title: mask.title,
                    desc: mask.desc,
                    cover: mask.cover,
                });
            } catch (error) {
                console.log(error);
            }
        };

        fetchMasks();
    }, [id]);

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
    // console.log(state.cover);

    const handleUpdate = async (e) => {
        e.preventDefault();
        // if (!validateForm()) {

        // } else {
        try {
            // Send updated product data to the server for updating
            await newRequest.put(`/addsmask/${id}`, state);
            navigate('/viewmask');
            toast.success('Details Update Successfully', {
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
                <h1 style={{ color: '#DCCA87' }}>Update Masks</h1>
                <form>
                    <div className='sections'>
                        <div className='info'>
                            <label htmlFor=''>Name of the Sanni Mask</label>
                            <input
                                type='text'
                                name='title'
                                placeholder='e.g.Butha Sanniya'
                                value={state.title}
                                onChange={handleChange}
                                onBlur={handleTitleBlur}
                            />{' '}
                            {titleTouched && state.title.trim() === '' && (
                                <p className='error'>Please enter a name.</p>
                            )}
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
                                placeholder='Brief description of the Sanni mask being updated'
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
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditMask;