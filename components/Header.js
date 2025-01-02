import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <a href="/" className="logo">Travel Booking</a>
      <nav className={`nav ${menuActive ? 'active' : ''}`}>
        <a href="/" className="active">Home</a>
        <a href="/destinations">Destinations</a>
        <a href="/bookings">Bookings</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
};

export default Header;
