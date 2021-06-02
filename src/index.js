// File: ./src/index.js

import "./config" // Imports environment variables and configures FCL

// Then the rest of ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { CurrentUserSubscription } from './hooks/current-user';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <CurrentUserSubscription />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
