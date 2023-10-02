import React from 'react';
import images from '../../constants/images.js';

import './PuppetBanner.css';

const PuppetBanner = () => {
    return (
        <div className="app__header">
            <div className="hero-banner-container">
                <div>
                    <h3>Exquisite Artistry</h3>
                    <div className="desc">
                        <p>"Sri Lankan Puppetry: Weaving Cultural Tales with Strings of Tradition"</p>
                        <img src={images.mainmask} alt="mask_image" className="spoon__img" />
                    </div>
                    <img src={images.pupp} alt="masks_banner" className="hero-banner-image" />
                </div>
            </div>
        </div>
    );
};

export default PuppetBanner;