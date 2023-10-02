import React, { useState, useEffect } from 'react';
import getCurrentUser from '../../utils/getCurrentUser';
import {  useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import './UserProfile.css';
import { toast } from 'react-toastify';

<script src='sweetalert2.all.min.js'></script>;

const UserProfile = ({ userId }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [desc, setDesc] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const currentUser = getCurrentUser();

  useEffect(() => {
    // Fetch user data by ID and populate the form fields
    newRequest
      .get(`/users/${currentUser._id}`)
      .then((res) => {
        const { username, email, country, desc, phone } = res.data;
        setUsername(username);
        setEmail(email);
        setCountry(country);
        setDesc(desc);
        setPhone(phone);
      })
      .catch((err) => console.log(err));
    console.log(currentUser);
  }, [userId]);
  console.log(userId);

  const handleSubmit = (event) => {
    event.preventDefault();

     if (username.trim() === '') {
      toast.error('Please Enter The username.');
      return;
    }
    if (email.trim() === '') {
      toast.error('Please Enter The Email.');
      return;
    }
    if (country.trim() === '') {
      toast.error('Please Enter The Country.');
      return;
    }

    const stringUserId = currentUser._id.toString();
    newRequest
      .put(`/users/${stringUserId}`, {
        username,
        email,
        country,
        desc,
        phone,
      })

      .then((res) => {
        setMessage(res.data.message);
      navigate('/');

        toast.success('User Profile Update Successfully', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='userProfileupdate'>
      <form onSubmit={handleSubmit}>
        <div className='left'>
          <h1>Update Your Account</h1>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor=''>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor=''>Country</label>
          <input
            type='text'
            id='country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <label htmlFor=''>Phone Number</label>
          <input
            type='phone'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor=''>Description</label>
          <textarea
            placeholder='A short description of yourself'
            name='desc'
            id=''
            cols='30'
            rows='10'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
