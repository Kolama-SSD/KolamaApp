import React from 'react';
import images from '../../constants/images.js';
import './KolamBanner.css';

const KolamBanner = () => {
    return (
        <div className="app__header">
            <div className="hero-banner-container">
                <div>
                    <h3>Exquisite Artistry</h3>
                    <div className="desc">
                        <p>"Mystical Masks of Sri Lanka: Exploring the Intriguing World of Sanni Rituals"</p>
                        <img src={images.mainmask} alt="mask_image" className="spoon__img" />
                    </div>
                    <img src={images.team} alt="masks_banner" className="hero-banner-image" />
                </div>
            </div>
        </div>

    );
};

export default KolamBanner;