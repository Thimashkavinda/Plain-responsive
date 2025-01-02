import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p className="description">
        Follow these simple steps to plan your perfect journey.
      </p>

      <div className="how-it-works-steps">
        <div className="how-it-works-step">
          <i className="fas fa-search"></i>
          <h3>Search</h3>
          <p>Find your desired destinations and explore available travel options.</p>
        </div>
        <div className="how-it-works-step">
          <i className="fas fa-calendar-check"></i>
          <h3>Book</h3>
          <p>Choose your preferred travel dates and confirm your booking.</p>
        </div>
        <div className="how-it-works-step">
          <i className="fas fa-suitcase-rolling"></i>
          <h3>Travel</h3>
          <p>Pack your bags and get ready for an unforgettable journey!</p>
        </div>
      </div>

      {}
      <div className="how-it-video-container">
      <iframe
    className="how-it-video"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" // iam try to upload plane video  not given a permission
    title="How It Works Video"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
></iframe>

      </div>
    </section>
  );
};

export default HowItWorks;
