import React from 'react';

import SubHeading from '../SubHeading/SubHeading.jsx';
import images from '../../constants/images.js';
import './ShopHeader.css';

const ShopHeader = () => (
    <div className="app__header app__wrapper section__padding">

        <div className="app__wrapper_img">
            <img src={images.welcomeShop} alt="header_img" />
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="Shop the new art items" />
            <h1 className="app__header-h1">The Key To Sri Lankan Art Items Shop</h1>
            <p className="p__opensans" style={{ margin: '2rem 0' }}>"The Key to Sri Lankan Art Items shop is a retail store that specializes in selling traditional Sri Lankan handicrafts and artwork. The shop offers a wide range of products, including handwoven textiles, pottery, woodcarvings, masks, puppets, and paintings. Each item is unique, reflecting the rich cultural heritage of Sri Lanka and the skill and creativity of its artisans. The shop provides a platform for local artists and craftsmen to showcase their work and earn a livelihood. By purchasing items from the Key to Sri Lankan Art Items shop, customers can support the preservation of Sri Lanka's traditional art forms and contribute to the sustainable development of local communities"...</p>
            <button type="button" className="custom__button">Explore Shop</button>
        </div>

    </div>
);

export default ShopHeader;