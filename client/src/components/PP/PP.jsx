import React from 'react';

import './PP.css';

const PP = (props) => {

    const { puppImage, puppetName } = props.data;

    return (
        <div>
            <div className="product-card">
                <img
                    src={puppImage}
                    width={350}
                    height={350}
                    className="product-image"
                    alt='mask_images'
                />
                <center><h2 className="product-name">{puppetName}</h2></center>
            </div>
        </div>
    );
};

export default PP;