import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Prodcut = (props) => {

    const { cover, title, _id } = props.data;

    return (
        <div>
            <Link to={`/products/${_id}`}>
                <div className="product-card">
                    <img
                        src={cover}
                        width={350}
                        height={350}
                        className="product-image"
                        alt='mask_images'
                    />
                    <center><h2 className="product-name">{title}</h2></center>
                </div>
            </Link>
        </div>
    );
};

export default Prodcut;