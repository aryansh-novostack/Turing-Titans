import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginW from './components/login/login';
import { Signup } from './components/signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Index />} /> */}
        <Route path="/" element={<LoginW />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;