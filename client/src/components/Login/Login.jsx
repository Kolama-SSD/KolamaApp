import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });





  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const res = await newRequest.post('/auth/login', {
        email: values.email,
        password: values.password,
      });
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('currentUser', JSON.stringify(res.data.info));
      const sanitizedUsername = DOMPurify.sanitize(currentUser.username);

      toast.success(sanitizedUsername + ' Login Successfully', {
        position: toast.POSITION.TOP_RIGHT
      });

      


      navigate('/');
    } catch (err) {
      setErrors({ error: err.response.data });
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='loginForm'>
            <label htmlFor='email'>Email</label>
            <Field
              type='text'
              id='email'
              name='email'
              placeholder='Enter your email...'
              className='loginInput'
            />
            <ErrorMessage name='email' component='div' className='error' />

            <label htmlFor='password'>Password</label>
            <Field
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password...'
              className='loginInput'
            />
            <ErrorMessage name='password' component='div' className='error' />

            <button
              type='submit'
              className='loginButton'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
            <p style={{ color:"red" }}>If You don't have an Account ?
            <a href="/register" style={{ color:"white" }}> Click Here</a>
            </p>
          </Form>
        )}
      </Formik>
      {/* <button className='loginRegisterButton'>Register</button> */}
    </div>
  );
};

export default Login;
