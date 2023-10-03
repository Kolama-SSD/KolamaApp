import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css';
import App from './App';

ReactDOM.render(
  <GoogleOAuthProvider clientId="640853892544-rejsh5pfpbmqsnse9thhcj2qosg03jbh.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root'));
