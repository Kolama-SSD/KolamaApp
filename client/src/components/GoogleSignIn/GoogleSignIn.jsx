import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { forwardRef, useImperativeHandle } from 'react';
import './GoogleSignIn.css';

const GoogleSignIn = forwardRef(({ successLogin, errorLogin }, ref) => {


  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const handleSuccessEvent = () => {
    successLogin(); // Call the parent function
  };

  const handleErrorEvent = () => {
    errorLogin(); // Call the parent function
  };

  useImperativeHandle(ref, () => ({
    // Expose parent function to parent component
    callParentFunction: handleSuccessEvent,
    callParentFunction: handleErrorEvent
  }));

  const login = useGoogleLogin({
    onSuccess: ((codeResponse) => {
      setUser(codeResponse)
      handleSuccessEvent()
    }),
    onError: (error) => handleErrorEvent
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <br />
      <button onClick={() => login()} style={{width: "100%"}}><div class="google-btn">
        <div class="google-icon-wrapper">
          <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
        </div>
        <p class="btn-text"><b>Sign in with google</b></p>
      </div></button>
    </div>
  );
});

export default GoogleSignIn