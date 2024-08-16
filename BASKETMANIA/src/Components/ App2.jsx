import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; 
import Home from './Home';
import About from './About';
import SignInModal from './SignInModal';
import '../App.css'


const App2 = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignInModal />} />
        
      </Routes>
    </Router>
  );
};

export default App2;