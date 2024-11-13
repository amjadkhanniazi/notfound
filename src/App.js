// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
// Import other components here

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        {/* Example: <Route path="/" element={<Home />} /> */}
        
        {/* Catch-all route for 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;