import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar'; 
import Home from '../Components/Home';
import About from '../Components/About';
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