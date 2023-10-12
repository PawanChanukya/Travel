import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Signup from './components/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
