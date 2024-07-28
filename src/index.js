import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter ,Switch, Routes, Router, Route } from 'react-router-dom';
import UserLoginPage from './Pages/UserLoginPage';
import NotFoundPage from './Pages/NotFoundPage';
import UserDashboard from './Components/User/UserDashboard';
import AdminLoginPage from './Pages/AdminLoginPage';

ReactDOM.render(
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<UserLoginPage />} />
      <Route path="/userDashboard" element={<UserDashboard/>} />
      <Route path="/admin" component={<AdminLoginPage />}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
