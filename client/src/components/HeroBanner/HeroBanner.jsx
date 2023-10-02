import React from 'react';
import images from '../../constants/images.js';
import './HeroBanner.css';

const HeroBanner = () => {
    return (
        <div className="app__header">
            <div className="hero-banner-container">
                <div>
                    <h3>Exquisite Artistry</h3>
                    <div className="desc">
                        <p>"Discover the Enchanting World of Sri Lankan Kolam Masks: A Fusion of Art, Culture, and Spirituality"</p>
                        <img src={images.mainmask} alt="mask_image" className="spoon__img" />
                    </div>
                    <img src={images.masks_banner} alt="masks_banner" className="hero-banner-image" />
                </div>
            </div>
        </div>
        
    );
};

export default HeroBanner;