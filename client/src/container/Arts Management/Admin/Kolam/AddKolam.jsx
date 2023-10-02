import React, { useReducer, useState } from 'react';
import './AddKolam.css';
import { addReducer, INITIAL_STATE } from '../../../../reducers/addReducer.js';
import upload from '../../../../utils/upload';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../../../utils/newRequest';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddKolam = () => {
    const [singleFile, setSingleFile] = useState(undefined);
    const [uploading, setUploading] = useState(false);

    const [titleTouched, setTitleTouched] = useState(false);
    const [descTouched, setDescTouched] = useState(false);

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [state, dispatch] = useReducer(addReducer, INITIAL_STATE);

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

    const validateForm = () => {
        if (state.title.trim() === '') {
            toast.error('Please Enter a Title.');
            return false;
        }
        if (state.desc.trim() === '') {
            toast.error('Please Enter The Description.');
            return false;
        }
        return true;
    };

    const handleUpload = async () => {
        setUploading(true);
        toast.success(' Uploading Images', {
            position: toast.POSITION.TOP_RIGHT,
        });

        try {
            const cover = await upload(singleFile);

            setUploading(false);
            dispatch({ type: 'ADD_IMAGES', payload: { cover } });
        } catch (err) {
            console.log(err);
        }
    };

    const mutation = useMutation({
        mutationFn: (addkolam) => {
            return newRequest.post('/addskolam', addkolam);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['myProducts']);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault(); if (!validateForm()) {
            return;
        }
        mutation.mutate(state);
        toast('Details inserted successfully');
        navigate('/viewkolam');
        toast.success('New Kolam Mask Added Successfully', {
            position: toast.POSITION.TOP_RIGHT,
        });

    };

    console.log(state);
    return (
        <><div className='add'>
            <div className='container'>
                <div className='titlep'>
                    <h1 style={{ color: '#DCCA87' }}>Add New Kolam Masks</h1>
                </div>

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
                            required
                        />
                        {titleTouched && state.title.trim() === '' && (
                            <p className='error'>Please enter a title.</p>
                        )}

                        <label htmlFor=''>Description</label>
                        <textarea
                            name='desc'
                            id=''
                            placeholder='Brief description of the new kolam mask being added'
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

                        <div className='images'>
                            <div className='imagesInputs'>
                                <label>Browse Image</label>

                                <label htmlFor='file' className='custom-file-upload'>
                                    Choose Cover Image
                                </label>

                                <input
                                    id='file'
                                    type='file'
                                    onChange={(e) => setSingleFile(e.target.files[0])}
                                />
                            </div>
                            <button className='create' onClick={handleUpload} required>
                                {uploading ? 'uploading' : 'Upload'}
                            </button>
                        </div>

                        <button className='create' onClick={handleSubmit}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div><ToastContainer /></>
    );
};

export default AddKolam;
