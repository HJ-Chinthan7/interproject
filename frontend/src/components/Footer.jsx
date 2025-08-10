import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Your trusted partner for innovative solutions and exceptional service.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Digital Marketing</Link></li>
              <li><Link to="/services">Consulting</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Email: info@mayana.com</p>
            <p>Phone: +91 1234567890</p>
            <p>Address: Bangalore</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Mayana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
