import React from 'react';

import SubHeading from '../SubHeading/SubHeading.jsx';
import images from '../../constants/images.js';
import './PlaceHeader.css';

const PlaceHeader = () => (
    <div className="app__header app__wrapper section__padding">

        <div className="app__wrapper_img">
            <img src={images.welcomePlaces} alt="header_img" />
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="Discover the traditional Sri Lankan places" />
            <h1 className="app__header-h1">The Key To Sri Lankan Heritage Art Places</h1>
            <p className="p__opensans" style={{ margin: '2rem 0' }}>"The key to Sri Lankan heritage mask and kolam art places is their deep connection to the country's ancient traditions and cultural beliefs. Sri Lankan masks and kolam art are an integral part of various religious and cultural ceremonies, such as exorcisms, healing rituals, and folk dramas. These artworks showcase a unique fusion of indigenous, Indian, and Southeast Asian influences, and are often inspired by Buddhist and Hindu mythology. The intricate designs, vibrant colors, and intricate details of Sri Lankan masks and kolam art are a testament to the exceptional craftsmanship of the country's artisans"...</p>
            <button type="button" className="custom__button">Explore Places</button>
        </div>
 
    </div>
);

export default PlaceHeader;