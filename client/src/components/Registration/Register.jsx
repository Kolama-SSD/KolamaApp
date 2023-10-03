import React, { useState } from 'react';
import upload from '../../utils/upload';
import './Register.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import newRequest from '../../utils/newRequest';
import * as Yup from 'yup';
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

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    // img: Yup.mixed().required('Profile Picture is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      let imgUrl = "";
      if (file) {
        imgUrl = await upload(file);
      }
      await newRequest.post("/auth/register", {
        ...values,
        img: imgUrl,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='registerForm'>
          <label htmlFor='username'>Username</label>
          <Field
            className='registerInput'
            type='text'
            id='username'
            name='username'
            placeholder='Enter your username...'
          />
          <ErrorMessage name='username' component='div' className='error' />

          <label htmlFor='email'>Email</label>
          <Field
            className='registerInput'
            type='text'
            id='email'
            name='email'
            placeholder='Enter your email...'
          />
          <ErrorMessage name='email' component='div' className='error' />

          <label htmlFor='password'>Password</label>
          <Field
            className='registerInput'
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password...'
          />
          <ErrorMessage name='password' component='div' className='error' />

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <Field
            className='registerInput'
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            placeholder='Confirm your password...'
          />
          <ErrorMessage
            name='confirmPassword'
            component='div'
            className='error'
          />

          <label htmlFor='img'>Profile Picture</label>
          <input
           className='registerInput' 
           type='file' 
          //  id='img'
           name='img'  
           onChange={handleFileChange}

           />
          <ErrorMessage name='img' component='div' className='error' />

          <button className='registerButton' type='submit'>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
