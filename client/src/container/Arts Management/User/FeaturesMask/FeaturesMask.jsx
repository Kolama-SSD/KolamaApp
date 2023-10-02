import React from 'react';
import Feature from '../../../../components/Feature/Feature';
import images from '../../../../constants/images.js';

import './FeaturesMask.css';

const featuresData = [
    {
        title: 'Masks Belong to Benthara Tradition - From Mr. Pathmasiri Weerasinghe’s Mask Collection', 
        text: 'Anabera Mask, Chukkiniya Mask, Appuhami mask, Mudali Mask, Nonchi Akka Mask, Police mask',
    },
    {
        title: 'Masks Belong to Ambalangoda Tradition - From Mr. L.A.R. Nandana’s Mask Collection',
        text: 'Anabera Mask, Jasaya Mask, King Maname Mask, Queen Maname Mask, Lenchina Mask, Mudali Mask, Nonchi Mask, Police Kolama Mask, Vidane Arachchi Mask',
    },
    {
        title: "Masks Belong to Mirissa Udupila Tradition- From Mr. T.W.A. Mahesh Kumara's and Mr.Indira Amarasekara's Mask Collection",
        text: 'Purnaka Raksha Mask, Gurulu Raksha Mask, Naga Kanya Mask, Ananga Bahirawa Mask, Ananga Bahirawa Mask, Arachchi Kolama Mask, Aththa Kolama Mask, Muththa Kolama Mask, Kindura Kolama Mask, Kinduri Kolama Mask, Mahasammatha Raja Mask, Marakkala Kolama Mask, Mudali Kolama Mask, Naga Kanya Mask, Narilatha Kolama Mask, Panchanari Ghataya Mask, Wedi Kolama Mask',
    },
    {
        title: 'Masks Belong to Mirissa South Kolam Tradition - (These Masks are Preserved by Rev.Ahangama Piyaguna)',
        text: 'Ana Bera Kolam Mask, Ananga Bhairawa Mask, Arachchi Kolam Mask, Dala Gara Mask, Dewagirir Kolam Mask, Gurulu Raksha Mask, Hewarala Mask, Kapiri Kolam Mask, Keela Gara Mask, King Maname Mask, Marakkala Kolam Mask, Mudalai Kolam Mask',
    },
];

const FeaturesMask = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">Mask Collection</h1>
                <img src={images.features} alt="mask_image" className='features_mask'/>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    );
};

export default FeaturesMask;