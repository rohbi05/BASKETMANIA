import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInModal from './SignInModal'; 
import '../App.css';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="./assets/icon.png"
          alt="icon"
          className="navbar-icon"
        />
        <span className="navbar-name">BASKETMANIA</span>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><button onClick={openModal} style={{ cursor: 'pointer' }}>Sign In</buttong></li>
        </ul>
     
      </div>
      <SignInModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default NavBar;