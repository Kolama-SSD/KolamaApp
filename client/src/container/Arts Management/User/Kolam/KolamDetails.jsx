import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import images from '../../../../constants/images';
import './KolamDetails.css';
import newRequest from '../../../../utils/newRequest.js';

const KolamDetails = () => {

    const { id } = useParams();
    const [mask, setMask] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await newRequest.get(`/addsmask/single/${id}`); // Assuming the API endpoint is '/api/items/:id'
                setMask(response.data);
            } catch (error) {
                console.error(error);
                setMask(null); // Handle error case when item is not found
            }
        };

        fetchItem();
    }, [id]);


    return (
        <div className='app__header'>
            {mask ? (
                <><div className='app__header'>
                    <div className='image-container'>
                        <img src={mask.cover} className='product-detail-image' alt='product' />
                    </div>
                </div><div className='product-detail-desc'>
                        <h1>{mask.title}</h1>
                        <img src={images.mainmask} alt="mask_image" className="spoon__img" style={{ margin: '0 50rem' }} />
                        <p className='p__opensans'>{mask.desc}</p>
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

export default KolamDetails;