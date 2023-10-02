import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import FooterOverlay from '../../components/Footer/FooterOverlay.jsx';
import Newsletter from '../../components/Footer/Newsletter.jsx';
import images from '../../constants/images.js';
import './Footer.css';

const Footer = () => (
    <div className="app__footer section__padding" id="login">
        <FooterOverlay />
        <Newsletter />

        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Contact Us</h1>
                <p className="p__opensans">No.25/5, 5th Lane, Mihindugama, Rathnapura</p>
                <p className="p__opensans">+94 71 526 4449</p>
                <p className="p__opensans">+94 71 343 5001</p>
            </div>

            <div className="app__footer-links_logo">
                <img src={images.mask} alt="footer_logo" />

                <p className="p__opensans">&quot;The Sri Lanka Heritage Arts Management System allows individuals to discover their true selves by immersing themselves in the selfless service of preserving and promoting the rich cultural heritage of Sri Lanka.&quot;</p>
                <img src={images.mainmask} className="spoon__img" alt="" style={{ marginTop: 15 }} />

                <div className="app__footer-links_icons">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>

            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Working Hours</h1>
                <p className="p__opensans">Monday-Friday:</p>
                <p className="p__opensans">08:00 am - 12:00 am</p>
                <p className="p__opensans">Saturday-Sunday:</p>
                <p className="p__opensans">07:00 am - 11:00 pm</p>
            </div>
        </div>

        <div className="footer__copyright">
            <p className="p__opensans">2023 Kolama. All Rights reserved.</p>
        </div>

    </div>
);

export default Footer;