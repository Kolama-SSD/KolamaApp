import React from 'react';

import SubHeading from '../SubHeading/SubHeading.jsx';
import images from '../../constants/images.js';
import './EventHeader.css';

const EventHeader = () => (
    <div className="app__header app__wrapper section__padding">
        <div className="app__wrapper_info">
            <SubHeading title="Organize the traditional Sri Lankan events" />
            <h1 className="app__header-h1">The Key To Sri Lankan Arts Event Table</h1>
            <p className="p__opensans" style={{ margin: '2rem 0' }}>"The Key to Sri Lankan Heritage Mask and Kolam, Puppets Arts event table is a showcase of Sri Lanka's unique cultural heritage in the fields of mask-making, kolam dancing, and puppetry. The event presents a range of colorful and intricate masks, many of which are used in traditional Sri Lankan dance forms such as Kolam, and showcases the skill and artistry of puppetry. Through this exhibition, visitors can learn about the history and significance of these art forms in Sri Lankan culture, and how they have evolved over time. The event aims to promote awareness and appreciation of these important cultural traditions and their continued practice"...</p>
            <button type="button" className="custom__button">Explore Events</button>
        </div>

        <div className="app__wrapper_img">
            <img src={images.welcomeEvents} alt="header_img" />
        </div>
    </div>
);

export default EventHeader;