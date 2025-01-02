import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">Travel Booking</h4>
          <p className="footer-description">
            Your one-stop destination for all travel needs. Discover, plan, and book effortlessly!
          </p>
        </div>

        <div className="footer-section newsletter">
          <h5 className="newsletter-title">Subscribe to Our Newsletter</h5>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              aria-label="Email"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>

        <div className="footer-section quick-links">
          <h5 className="links-title">Quick Links</h5>
          <ul className="links-list">
            <li><a href="/about" className="link-item">About Us</a></li>
            <li><a href="/destinations" className="link-item">Destinations</a></li>
            <li><a href="/faq" className="link-item">FAQ</a></li>
            <li><a href="/contact" className="link-item">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section social-icons">
          <h5 className="social-title">Follow Us</h5>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-section contact-info">
          <h5 className="contact-title">Contact Us</h5>
          <p className="contact-item">
            <i className="fas fa-envelope"></i> Email: <a href="mailto:kavindathimash0@gmail.com">kavindathimash0@gmail.com</a>
          </p>
          <p className="contact-item">
            <i className="fas fa-phone-alt"></i> Phone: +705207058
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Travel Booking. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
