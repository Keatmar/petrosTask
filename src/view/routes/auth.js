import React from 'react';
import Register from 'view/auth/register';
import Login from 'view/auth/login/index';
import ForgotPassword from 'view/auth/forgotPassword/index';
import CompleteProfile from 'view/auth/completeProfile/index';
import Welcome from 'view/welcome/index';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';

const AuthRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/completeProfile" element={<CompleteProfile />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default AuthRoutes;
