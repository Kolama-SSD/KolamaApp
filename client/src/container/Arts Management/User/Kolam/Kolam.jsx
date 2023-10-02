import React, { useState } from 'react';
import Masks from '../../../../components/Masks/Masks.jsx';
import './Kolam.css';
import KolamBanner from '../../../../components/KolamBanner/KolamBanner.jsx';
import newRequest from '../../../../utils/newRequest.js';
import { useQuery } from '@tanstack/react-query';
import getCurrentUser from '../../../../utils/getCurrentUser.js';

const Kolam = () => {

    const [query, setQuery] = useState("");
    const currentUser = getCurrentUser();

    const { data } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () =>
            newRequest.get(`/addsmask?userId=${currentUser._id}`).then((res) => {
                return res.data;
            }),
    });

    return (
        <div className="app__header">

            <KolamBanner />

            <div className='main_title'>
                <h2 className="app__header-h1">Sanni Masks ෴</h2>
                <p className="p__opensans" style={{ margin: '2rem 15rem' }}>The sanni masks are mainly used in healing ceremonies and worn by an edura (a sort of Sri Lankan artist/exorcist). Apparently, there are eighteen different Sanni masks, each specializing in curing specific illnesses.
                    Sanni yakuma, sometimes known as Daha ata sanniya (දහ අට සන්නිය), is a traditional Sinhalese exorcism ritual. The ritual consists of 18 masked dances, each depicting a particular illness or ailment affecting humans. These 18 dances (දහ අට සන්නිය) are the main dances of the Pahatharata, or low country, dancing form, which is one of the three main dancing forms of Sri Lanka.The ritual calls the demons who are thought to affect the patient, who are then told not to trouble humans and banished....</p>
            </div>

            <input type="text" placeholder='Search...' className='search' onChange={(e) => setQuery(e.target.value)} />

            <div className="product_container">
                {data?.filter((data) => data.title.toLowerCase().includes(query)
                ).map((data) => <Masks key={data.id} data={data} />)}
            </div>

        </div>
    );

}

export default Kolam;