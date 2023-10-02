import React, { useState } from 'react';
import upload from '../../utils/upload';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [file, setFile] = useState(null);
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    img: '',
  };
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      let imgUrl = '';
      if (file) {
        // Upload the file and get the URL
        imgUrl = await upload(file);
      }

      // Replace this part with your actual registration logic
      // Assuming you have a function like registerUser that sends a POST request to your API
      // You should replace this part with your actual registration logic
      const registrationData = {
        ...values,
        img: imgUrl,
      };



      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };




  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(initialValues);
      }}>
        <label htmlFor="username">Username</label>
        <input
          className="registerInput"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username..."
        />

        <label htmlFor="email">Email</label>
        <input
          className="registerInput"
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email..."
        />

        <label htmlFor="password">Password</label>
        <input
          className="registerInput"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password..."
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="registerInput"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password..."
        />

        <label htmlFor="img">Profile Picture</label>
        <input
          className="registerInput"
          type="file"
          name="img"
          onChange={handleFileChange}
        />

        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
