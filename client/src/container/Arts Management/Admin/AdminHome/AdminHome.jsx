import React from 'react';
import { images } from '../../../../constants';

import './AdminHome.css';

const AdminHome = () => {
    return (
        <div className='admin'>
            <h1 className="header-h1">Admin Dashboard ෴</h1>
            <div className='box' style={{ "--i": 0 }}>
                <i></i>
                <div className='content'>
                    <img src={images.admin_art} alt="header_img" />
                    <h2>Art Management System</h2>
                    <a href="viewkolam">View Kolam Details</a>
                    <a href="viewmask">View Masks Details</a>
                    {/* <a href="#view">View Puppets Details</a> */}
                </div>
            </div>
            <div className='box' style={{ "--i": 1 }}>
                <i></i>
                <div className='content'>
                    <img src={images.admin_pro} alt="header_img" />
                    <h2>Provincial Management System</h2>
                    <a href="#view">View Kolam Details</a>
                </div>
            </div>
            <div className='box' style={{ "--i": 2 }}>
                <i></i>
                <div className='content'>
                    <img src={images.admin_event} alt="header_img" />
                    <h2>Event Management System</h2>
                    <a href="#view">View Kolam Details</a>
                </div>
            </div>
            <div className='box' style={{ "--i": 3 }}>
                <i></i>
                <div className='content'>
                    <img src={images.admin_order} alt="header_img" />
                    <h2>Order Management System</h2>
                    <a href="#view">View Kolam Details</a>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;