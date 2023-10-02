import React from 'react';
import Feature from '../Feature/Feature';
import images from '../../constants/images.js';

import './Traditional.css';


const Traditional = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">Four Main Traditions</h1>
                <img src={images.art} alt="mask_image" className="banner-image" />
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Kolam Dance Drama" text="According to written records, the kolamdrama is two centuries old, but still occasionally prevalent in some villages in Sri Lanka. It is challenging to trace the roots of a folk drama which is very old; however, with reference to written records, and kolamdramas performed today, this intends to provide a comprehensive account of the kolamdance drama in Sri Lanka." />

                <Feature title="Kohomba Kankariya" text="Kohomba Kankariya or the Kohomba Yak Kankariya is the main ritual or the Shanthi Karma,which is performed in the Kandyan dance tradition to invoke blessings from the deities or gods known as the New Kohomba, the old Kohomba, the great Kohomba. Moreover the Black prince (Kalu Kumara), Ambarapati (Pattini), God Weeramunda, God Kadawara, Kudaguru, Mahaguru,and the group of 36 ancestors of veddhasor Adivasi are also included here. Kohomba Kankariya is traditionally associated with the circle of harvesting in the country." />

                <Feature title="Kooththu Drama" text="Kohomba Kankariya or the Kohomba Yak Kankariya is the main ritual or the Shanthi Karma,which is performed in the Kandyan dance tradition to invoke blessings from the deities or gods known as the New Kohomba, the old Kohomba, the great Kohomba. Moreover the Black prince (Kalu Kumara), Ambarapati (Pattini), God Weeramunda, God Kadawara, Kudaguru, Mahaguru,and the group of 36 ancestors of veddhasor Adivasi are also included here. Kohomba Kankariya is traditionally associated with the circle of harvesting in the country." />

                <Feature title="Adivasi Rituals" text="The Sri Lankan Adivasi or Aboriginal community is commonly known as Veddas.The term Vedda originates from the Sanskrit word vyadha,which means hunter. The Adivasis were originally hunters and gatherers. They are known as Wanniya-laettowhich means “forest-beings”. The Adivasis are minoritized indigenous groups in Sri Lanka.According to popular myth, supported by the historical source of Mahawansa, the ancestors of Sri Lanka's current Sinhalese majority, who came to the island from North-East India in the 5th century BC, brutally destroyed the native Yakkhaand Naga population." />
            </div>
        </div>
    );
};

export default Traditional;