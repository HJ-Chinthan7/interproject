import React, { useState } from 'react';
import contactService from '../services/contactService';
import '../formsStyle/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8);
  }

  const refreshCaptcha = () => {
    setCaptchaInput("");
    setCaptchaError(false);
    setCaptcha(generateCaptcha());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (captchaInput !== captcha) {
      setCaptchaError(true);
      setSuccess(false);
      return;
    }
    
    setCaptchaError(false);
    setLoading(true);
    setError(null);
    
    try {
      await contactService.addContact(formData);
      
      setSuccess(true);
      
      setFormData({ name: '', email: '', message: '' });
      setCaptchaInput('');
      setCaptcha(generateCaptcha());
      
      setTimeout(() => setSuccess(false), 3000);
      
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      
      {success && (
        <div className="success-message">
          ✓ Message sent successfully! We'll get back to you soon.
        </div>
      )}
      
      {error && (
        <div className="error-message">
          ❌ {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="username">Name *</label>
          <input
            type="text"
            id="username"
            name="name"
            value={formData.username}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Enter your name"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Enter your email"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="form-textarea"
            placeholder="Enter your message"
            disabled={loading}
          />
        </div>

        <div className="captcha-section">
          <div className="captcha-display">
            <span className="captcha-text">{captcha}</span>
            <button
              type="button"
              onClick={refreshCaptcha}
              className="refresh-btn"
              aria-label="Refresh captcha"
              disabled={loading}
            >
              ↻
            </button>
          </div>
          
          <div className="form-group">
            <label htmlFor="captcha">Enter the code above *</label>
            <input
              type="text"
              id="captcha"
              value={captchaInput}
              onChange={(e) => {
                setCaptchaInput(e.target.value);
                setCaptchaError(false);
              }}
              required
              className={`form-input ${captchaError ? 'error' : ''}`}
              placeholder="Type the captcha code"
              maxLength="6"
              disabled={loading}
            />
            {captchaError && (
              <span className="error-message">
                ❌ Incorrect captcha. Please try again.
              </span>
            )}
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
