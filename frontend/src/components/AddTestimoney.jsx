import React, { useState } from 'react';
import testimonialService from '../services/testimonialService';
import '../formsStyle/AddTestimoney.css';

const AddTestimoney = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    designation: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
     
      await testimonialService.addTestimonial(formData);
      
     
      setFormData({
        name: '',
        message: '',
        designation: '',
        image: null
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to add testimonial');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-testimoney-container">
      <h2 className="form-title">Add Testimonial</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="testimoney-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
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
            placeholder="Share your experience..."
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation *</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
            placeholder="Your designation"
          />
        </div>


        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Adding...' : 'Add Testimonial'}
        </button>
      </form>
    </div>
  );
};

export default AddTestimoney;
