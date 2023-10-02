import React from 'react';
import images from '../../constants/images';

import './Process.css';

const Process = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={images.devil_dancer} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h1 className="gradient__text">Kolam Masks</h1>
                <p>There is an inextricable link between kolamdrama and masks. Masks are used in Sinhala thovil ceremonies too; however, those used in kolamdrama have their own distinctive features. Except the Chief (sabhapathi, sabe vidane, kariya karawana raala)every other character wears a mask. The masks are attractive and artistic. These are created according to standards and painted to highlight the features of a particular character. The masks used in kolamdrama can be divided into three categories; <br /> <br />
                    1. Masks which represent human beings: King, Queen, Hewa, Jasa, Lenchina, Suransina, Arachchi, Mudali, Chencha, Liyanappu <br />
                    2. Over-realistic masks: Narilatha, sandakinduru, gurulu, surabawalliya, giridevi, Raksha <br />
                    3. Animal masks : Lion, tiger, fox, dog, eagle <br /> <br />
                The making of masks is a complex process. The process is included in three texts written in Sanskrit; Shariputraya, Rupawaliya, Maimathaya.The making of a kolammask has the following steps; <br /> <br />
                    1. Cutting the tree and processing the timber, <br />
                    2. Flattening, <br />
                    3. Removing unnecessary sections, <br />
                    4. Smoking, <br />
                    5. Cutting shapes, <br />
                    6. Crafting shapes, <br />
                    7. Painting.
                </p>
            </div>
        </div>    
    );
};

export default Process;