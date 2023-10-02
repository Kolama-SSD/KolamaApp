import React, { useState } from 'react';
import DiscoverMenuItems from '../../constants/DiscoverMenuItems.js';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const DiscoverMenu = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {DiscoverMenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link
                            className={item.cName}
                            to={item.path}
                            onClick={() => setClick(false)}
                        >
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default DiscoverMenu;