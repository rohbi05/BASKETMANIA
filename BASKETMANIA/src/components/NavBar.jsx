import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignInModal from './SignInModal'; 
import '../App.css'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleHomeClick = (event) => {
    event.preventDefault();  // Prevent the default behavior
    navigate('/home');
    window.location.reload();  // Refresh the page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://www.svgrepo.com/show/21317/basketball-ball.svg"
          alt="icon"
          className="navbar-icon"
        />
        <span className="navbar-name">BASKETMANIA</span>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/home" onClick={handleHomeClick}>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><button onClick={openModal} style={{ cursor: 'pointer' }}>Sign In</button></li>
        </ul>
      </div>
      <SignInModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;