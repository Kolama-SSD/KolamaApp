import React, { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditKolam.css';
import newRequest from '../../../../utils/newRequest';
import { toast } from 'react-toastify';
import upload from '../../../../utils/upload';
import { addReducer, INITIAL_STATE } from '../../../../reducers/addReducer.js';

const EditKolam = () => {
    const { id } = useParams();
    const [singleFile, setSingleFile] = useState(undefined);
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
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
            toast.error('Please Enter a Kolam Mask Name.');
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
        const fetchProduct = async () => {
            try {
                const response = await newRequest.get(`/addskolam/single/${id}`);
                const product = response.data;
                setState({
                    title: product.title,
                    desc: product.desc,
                    cover: product.cover,
                });
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpload = async () => {
        setUploading(true);
        toast.success('Uploading Images', {
            position: toast.POSITION.TOP_RIGHT,
        });
        try {
            let updatedCover = state.cover;

            if (singleFile) {
                const cover = await upload(singleFile);
                console.log('Cover URL:', cover);
                updatedCover = cover;
            }

            const images = await Promise.all(
                [...files].map(async (file) => {
                    const url = await upload(file);
                    console.log('Image URL:', url);
                    return url;
                })
            );

            dispatch({ type: 'ADD_IMAGES', payload: { cover: updatedCover, images } });

            setState((prevState) => ({
                ...prevState,
                cover: updatedCover,
            }));

            setUploading(false);
        } catch (err) {
            console.log(err);
        }
    };
    
    const handleUpdate = async (e) => {
        e.preventDefault();
        // if (!validateForm()) {

        // } else {
        try {
            // Send updated product data to the server for updating
            await newRequest.put(`/addskolam/${id}`, { ...state });
            navigate('/viewkolam');
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
                <h1 style={{ color: '#DCCA87' }}>Update Kolam Masks</h1>
                <form>
                    <div className='sections'>
                        <div className='info'>
                            <label htmlFor=''>Name of the Kolam Mask</label>
                            <input
                                type='text'
                                name='title'
                                placeholder='e.g.Nonchi Mask'
                                value={state.title}
                                onChange={handleChange}
                                onBlur={handleTitleBlur}
                            />{' '}
                            {titleTouched && state.title.trim() === '' && (
                                <p className='error'>Please enter a name.</p>
                            )}
                            <div className='images'>
                                <div className='viewImg'>
                                    <img src={state.cover} alt='cover_img' />
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
                                </div> */}
                                {/* <button className='create' onClick={handleUpload}>
                                    {uploading ? 'uploading' : 'Upload'}
                                </button> */}
                            </div>
                            <label htmlFor=''>Description</label>
                            <textarea
                                name='desc'
                                id='desc'
                                placeholder='Brief description of the Kolam mask being updated'
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

export default EditKolam;