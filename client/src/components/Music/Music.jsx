import React from 'react';
import images from '../../constants/images';

import './Music.css';

const Music = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={images.dancers} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h1 className="gradient__text">The Kolam Music</h1>
                <p>The kolammusic consists of singing and playing instruments. The low country drum or devol berayais mainly used here. Further, thaalam potaand horanewaare also used. The dancers wear rahu kuttamand silambu kuttam; even though these generate sound, these are not considered musical instruments. However, the combination of all of the above generates beautiful music.<br />The low country drum is used to play verses/rhythms associated with low country dance. There are verses associated with each character in a kolamdrama. Verses such as ashirwadaand dewaradanaare sung before the commencement of the kolamdrama. Further, the magul beraisplayed before the commencement and pinberaafter performance. The horanewa (Sri Lankan equivalent of Oboe) occupies an important place in Kolam drama.<br/>
                The singing has its own characteristics. Some melodies cannot be found in other common verses. For example, Jasa, Lenchina, Surabawalliyaand Sandakinduruare very unique. However, the Kolam singing is seemingly influenced by the nadagamand kapirinnasinging styles.</p>
            </div>
        </div>
    );
};

export default Music;