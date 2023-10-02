import React from 'react';
import { Link } from 'react-router-dom'; 
import SubHeading from '../SubHeading/SubHeading.jsx';
import images  from '../../constants/images.js';
import './ArtHeader.css';

const ArtHeader = () => (
    <div className="app__header app__wrapper section__padding">
        <div className="app__wrapper_info">
            <SubHeading title="Chase the traditional sri lankan arts" />
            <h1 className="app__header_app">The Key To Sri Lankan Arts</h1>
            <p className="p__opensans" style={{ margin: '2rem 0' }}>"The key to Sri Lankan traditional heritage arts lies in their connection to the country's ancient history, cultural beliefs, and diverse ethnic communities. These arts include a range of creative expressions, including traditional dance, music, drama, and crafts, that have been passed down through generations. They showcase a unique fusion of indigenous, Indian, and Southeast Asian influences, resulting in a distinctive artistic style. The intricate designs and patterns of Sri Lankan traditional heritage arts are often inspired by Buddhist and Hindu mythology, and feature bold colors, ornate details, and intricate motifs. These arts are also known for their exceptional craftsmanship, with many works created by highly skilled artisans using age-old techniques and tools. The preservation and promotion of Sri Lankan traditional heritage arts are essential to safeguarding the country's cultural identity and enriching the lives of future generations"...</p>
            <button type="button" className="custom__button">
                <Link className='link' to='/arts'>Explore Arts</Link>
            </button>
        </div>

        <div className="app__wrapper_img">
            <img src={images.welcomeArts} alt="header_img" />
        </div>
    </div>
);

export default ArtHeader;
