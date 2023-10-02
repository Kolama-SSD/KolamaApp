import React from 'react';
import Traditional from '../../../../components/Traditional/Traditional';
import Intro from '../../../../components/Intro/Intro';
import FeaturesMask from '../FeaturesMask/FeaturesMask';
import Origin from '../../../../components/Origin/Origin';
import Music from '../../../../components/Music/Music';
import Process from '../../../../components/Process/Process';
import Blog from '../../../../components/Blog/Blog';

const Art = () => {
    return (
        <div className='app__header'>
            <div>
                <Traditional />
                <Intro />
                <FeaturesMask />
                <Origin />
                <Music />
                <Process />
                <Blog />
            </div>
        </div>  
    );
};

export default Art;