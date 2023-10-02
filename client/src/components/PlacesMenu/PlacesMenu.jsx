import React from 'react';

import './PlacesMenu.css';

const PlacesMenu = ({ name, province }) => (
    <div className="app__menuitem">
        <div className="app__menuitem-head">
            <div className="app__menuitem-name">
                <p className="p__cormorant" style={{ color: '#DCCA87' }}>{name}</p>
            </div>
            <div className="app__menuitem-dash" />
            <div className="app__menuitem-price">
                <p className="p__cormorant">{province}</p>
            </div>
        </div>
    </div>
);

export default PlacesMenu;