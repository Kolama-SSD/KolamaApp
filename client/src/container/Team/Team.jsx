import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading.jsx';
import images from '../../constants/images.js';
import './Team.css';

const Team = () => (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.team} alt="mask_image" />
        </div>
        <div className="app__wrapper_info">
            <SubHeading title="Kolama Team Word" />
            <h1 className="headtext__cormorant">What we believe in</h1>

            <div className="app__team-content">
                <div className="app__team-content_quote">
                    <img src={images.quote} alt="quote_image" />
                    <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
                </div>
                <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
            </div>

            <div className="app__team-sign">
                <p>RCP Rajapaksha</p>
                <p className="p__opensans">Kolama Founder</p>
            </div>
        </div>
    </div>
);

export default Team;