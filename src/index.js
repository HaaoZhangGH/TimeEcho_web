import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Thanks from './Thanks';
import UserAgreement from './UserAgreement';
import PrivacyPolicy from './PrivacyPolicy';
import { I18nProvider } from './i18n';

import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nProvider>
    <HashRouter>
      {/* <Thanks/> */}
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/thanks" element={<Thanks></Thanks>} />
        <Route exact path="/user-agreement" element={<UserAgreement></UserAgreement>} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy></PrivacyPolicy>} />
      </Routes>
    </HashRouter>
  </I18nProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
