import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about our mission and values</p>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Welcome to our platform! We are dedicated to providing exceptional services 
            and creating meaningful connections. Our journey began with a simple vision: 
            to make technology accessible and beneficial for everyone.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We strive to deliver innovative solutions that empower individuals and businesses 
            to achieve their goals. Through continuous improvement and dedication to excellence, 
            we aim to make a positive impact in the digital landscape.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries and exploring new possibilities</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Building trust through transparency and ethical practices</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>Delivering quality in everything we do</p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>Fostering connections and supporting growth</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Get In Touch</h2>
          <p>
            We'd love to hear from you! Whether you have questions, feedback, or just want 
            to connect, feel free to reach out to us.
          </p>
          <div className="contact-info">
            <p>Email: info@mayana.com</p>
            <p>Phone: +91 1234567890</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
