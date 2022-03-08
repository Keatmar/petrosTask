import React from 'react';
import Home from 'view/main/home/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
