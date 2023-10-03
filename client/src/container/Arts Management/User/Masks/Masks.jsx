

import React, { useState } from 'react';
import HeroBanner from '../../../../components/HeroBanner/HeroBanner.jsx';
import Product from '../../../../components/Product/Product.jsx';
import './Masks.css';
import newRequest from '../../../../utils/newRequest.js';
import { useQuery } from '@tanstack/react-query';
import getCurrentUser from '../../../../utils/getCurrentUser.js';

const Masks = () => {
    const [query, setQuery] = useState('');
    const currentUser = getCurrentUser();

    const { data } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () =>
            newRequest
                .get(`/addskolam?userId=${currentUser._id}`)
                .then((res) => {
                    return res.data;
                }),
    });

    // Validation function to ensure the search query is not empty
    const isQueryValid = (input) => {
        return input.trim() !== ''; // Ensure it's not just whitespace
    };

    const handleSearchInputChange = (e) => {
        const inputValue = e.target.value;
        if (isQueryValid(inputValue)) {
            setQuery(inputValue);
        } else {
            // Optionally, you can display an error message or prevent setting an empty query
            // For simplicity, I'm just setting the query to an empty string here.
            setQuery('');
        }
    };

    return (
        <div className="app__header">
            {/* ... Rest of your component ... */}
            <input
                type="text"
                placeholder="Search..."
                className="search"
                value={query} // Controlled input
                onChange={handleSearchInputChange}
            />
            {/* ... Rest of your component ... */}
        </div>
    );
};

export default Masks;
