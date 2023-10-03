import React, { useState, useRef } from 'react';
import './Login.css';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Login = () => {
  const navigate = useNavigate();

  // Define state for form fields
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await newRequest.get('/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('currentUser', JSON.stringify(res.data.info));
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

      toast.success(currentUser.username + ' Login Successfully', {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate('/');
    } catch (err) {
      // setFormErrors({ error: err.response.data });
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const googleSignInRef = useRef(null);

  const successGoogleLogin = ()=> {
    toast.success("Login Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate('/');
  }

  const errorGoogleLogin = ()=> {
    toast.error({
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Enter your email...'
          className='loginInput'
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Enter your password...'
          className='loginInput'
          value={formData.password}
          onChange={handleInputChange}
        />

        <button type='submit' className='loginButton'>
          Login
        </button>
        <p style={{ color: 'red' }}>
          If You don't have an Account ?
          <a href="/register" style={{ color: 'white' }}>
            Click Here
          </a>
        </p>
            <GoogleSignIn ref={googleSignInRef} successLogin={successGoogleLogin} errorLogin={errorGoogleLogin}></GoogleSignIn>
      </form>
    </div>
  );
};

export default Login;
