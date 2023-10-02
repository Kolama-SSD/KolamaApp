import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading.jsx';
import PlacesMenu from '../../components/PlacesMenu/PlacesMenu.jsx';
import images from '../../constants/images.js';
import data from '../../constants/data.js';
import './SriLanka.css';

const SriLanka = () => (
    <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
            <SubHeading title="Places That Fit Your Fav Heritage Art" />
            <h1 className="headtext__cormorant">Areas Popular</h1>
        </div>

        <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_left  flex__center">
                <div className="app__specialMenu_menu_items">
                    {data.left.map((left, index) => (
                        <PlacesMenu key={left.name + index} name={left.name} province={left.province} />
                    ))}
                </div>
            </div>

            <div className="app__specialMenu-menu_img">
                <img src={images.map} alt="menu__img" />
            </div>

            <div className="app__specialMenu-menu_right  flex__center">
                <div className="app__specialMenu_menu_items">
                    {data.right.map((right, index) => (
                        <PlacesMenu key={right.name + index} name={right.name} province={right.province} />
                    ))}
                </div>
            </div>
        </div>

        <div style={{ marginTop: 15 }}>
            <button type="button" className="custom__button">View More</button>
        </div>
    </div>
);

export default SriLanka;