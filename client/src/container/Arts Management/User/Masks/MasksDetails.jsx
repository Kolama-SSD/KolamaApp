import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import images from '../../../../constants/images';
import './MasksDetails.css';
import newRequest from '../../../../utils/newRequest.js';

const MasksDetails = () => {

    const { id } = useParams();
    const [kolam, setKolam] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await newRequest.get(`/addskolam/single/${id}`); // Assuming the API endpoint is '/api/items/:id'
                setKolam(response.data);
            } catch (error) {
                console.error(error);
                setKolam(null); // Handle error case when item is not found
            }
        };
        fetchItem();
    }, [id]);

    return (
        <div className='app__header'>
            {kolam ? (
                <><div className='app__header'>
                    <div className='image-container'>
                        <img src={kolam.cover} className='product-detail-image' alt='product' />
                    </div>
                </div><div className='product-detail-desc'>
                        <h1>{kolam.title}</h1>
                        <img src={images.mainmask} alt="mask_image" className="spoon__img" style={{ margin: '0 50rem' }} />
                        <p className='p__opensans'>{kolam.desc}</p>
                        <div className='logo'>
                            <img src={images.mask} alt='app__logo' />
                        </div>
                    </div></>
            ) : (
                <h2>Item not found</h2>
            )}
        </div>
    );
};

export default MasksDetails;