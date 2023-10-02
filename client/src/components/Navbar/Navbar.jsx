import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

// import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';

import { ShoppingCart } from 'phosphor-react';

import { GiDualityMask } from 'react-icons/gi';
import images from '../../constants/images';
// import Product from '../../container/OrderManagement/User/shop/product';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';
import DiscoverMenu from '../Dropdown/DiscoverMenu';


const Navbar = () => {

  const [open, setOpen] = useState(false);


  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.clear();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  console.log(currentUser);

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [discover, setDiscover] = useState(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onEnter = () => {
    if (window.innerWidth < 960) {
      setDiscover(false);
    } else {
      setDiscover(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setTimeout(() => {
        setDropdown(false);
      }, 2600);
    };
  };

  const onLeave = () => {
    if(window.innerWidth < 960) {
      setDiscover(false);
    } else {
      setTimeout(() => {
        setDiscover(false);
      }, 2600);
    };
  };

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.mask} alt='app__logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='/'>Home</a>
        </li>
        <li className='p__opensans' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <a href='/arts'>Arts</a>
          {dropdown && <Dropdown />}
        </li>
        <li className='p__opensans'>
          <a href='#event'>Event</a>
        </li>
        <li className='p__opensans' onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <a href='#discover'>Discover</a>
          {discover && <DiscoverMenu />}
        </li>
        <li className='p__opensans'>
          <a href='/shop'>Shop</a>
        </li>
      </ul>

      <div className='app__navbar-login'>

        {!currentUser && (
          <a href='/login' className='p__opensans'>
            Log In / Registration
          </a>
        )}
        {currentUser && (
          <div className='userProfile' onClick={() => setOpen(!open)}>
            <img
              src={
                currentUser.img ||
                'https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg'
              }
              alt='pro pic'
            />
            <di className='username'>{currentUser?.username}</di>
            {open && (
              <div className='options'>
                {currentUser?.isSeller && (
                  <>
                    <Link className='link' to='/myproduct'>
                      MyProducts
                    </Link>
                    <Link className='link' to='/adminhome'>
                      AdminDashboard
                    </Link>
                    <Link className='link' to='/supplier/add'>
                      Add New Product
                    </Link>
                  </>
                )}

                <Link className='link' to='/userprofile'>
                 User Profile
                </Link>
                <Link className='link' onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            )}
          </div>
        )}

        <div className='p__opensans'>
   
        {/* <button
          className='btn shopping-cart-btn'
          onClick={() => setCartVisible(true)}
         >
          <GiShoppingBag size={24} />
          {productsInCart.length > 0 && (
            <span className='product-count'>{productsInCart.length}</span>
          )}
        </button> */}

          <Link to='/cart'>
            <GiShoppingBag size={32} />
          </Link>
        </div>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <GiDualityMask
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <ul className='app__navbar-smallscreen_links'>
              <li>
                <a href='#home' onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href='#arts' onClick={() => setToggleMenu(false)}>
                  Arts
                </a>
              </li>
              <li>
                <a href='#discover' onClick={() => setToggleMenu(false)}>
                  Discover
                </a>
              </li>
              <li>
                <a href='#event' onClick={() => setToggleMenu(false)}>
                  Event
                </a>
              </li>
              <li>
                <a href='#shop' onClick={() => setToggleMenu(false)}>
                  Shop
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );

};

export default Navbar;
