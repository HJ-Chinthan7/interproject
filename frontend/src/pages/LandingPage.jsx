import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="landing-container">
      <main className="landing-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Your Platform</span>
            </h1>
            <p className="hero-subtitle">
              Join thousands of users who are already experiencing the future of 
              digital collaboration and productivity.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary">
                Get Started Free
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Sign In
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">
              <span>🚀</span>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast performance with 99.9% uptime guarantee</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your data is encrypted and protected with enterprise-grade security</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Easy to Use</h3>
              <p>Intuitive interface designed for users of all skill levels</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Join our community today and transform your workflow</p>
          <Link to="/register" className="btn btn-large btn-primary">
            Create Your Account
          </Link>
        </section>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2024 YourBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
