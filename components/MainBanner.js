import React, { useState } from 'react';
import './MainBanner.css';
import banner from '../assets/9999.webp';

const MainBanner = () => {
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      alert('Redirecting to booking page...');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="main-banner">
      <img src={banner} alt="Travel the World" className="banner-image" />
      <div className="banner-content">
        <h1>Explore the World Together with Premium Travel</h1>
        <p>Get up to 50% Discount on Early Bookings</p>
        <div
          className={`action-button ${hovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {loading ? 'Loading...' : 'Book Now'}
        </div>
      </div>
      <div className="banner-overlay"></div>
    </div>
  );
};

export default MainBanner;
