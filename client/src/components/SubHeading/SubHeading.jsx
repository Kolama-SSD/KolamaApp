import React from 'react';

import images from '../../constants/images.js';

const SubHeading = ({ title }) => (
    <div style={{ marginBottom: 'rem' }}>
        <p className="p__cormorant">{title}</p>
        <img src={images.mainmask} alt="mask_image" className="spoon__img" />
    </div>
);

export default SubHeading;