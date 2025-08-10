import React, { useState } from 'react';
import outreachService from '../services/outreachService';
import '../formsStyle/AddOutreach.css';

const AddOutreach = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    partners: '',
    contact: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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
    setError(null);
    setSuccess(false);

    try {
      const outreachData = {
        ...formData,
        partners: formData.partners.split(',').map(partner => partner.trim())
      };
      
      await outreachService.createOutreach(outreachData);
      setSuccess(true);
      setFormData({
        title: '',
        description: '',
        date: '',
        location: '',
        partners: '',
       contact: ''
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create outreach');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-outreach-container">
      <h2>Add New Outreach</h2>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Outreach created successfully!</div>}
      
      <form onSubmit={handleSubmit} className="add-outreach-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter outreach title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter detailed description"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Enter location"
          />
        </div>

        <div className="form-group">
          <label htmlFor="partners">Partners</label>
          <input
            type="text"
            id="partners"
            name="partners"
            value={formData.partners}
            onChange={handleChange}
            placeholder="Enter partners separated by commas"
          />
          <small>Separate multiple partners with commas</small>
        </div>

        <div className="form-group">
          <label htmlFor="contact_email">Contact Email *</label>
          <input
            type="email"
            id="contact_email"
            name="contact"
            value={formData.contact_email}
            onChange={handleChange}
            required
            placeholder="Enter contact email"
          />
        </div>

        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Creating...' : 'Add Outreach'}
        </button>
      </form>
    </div>
  );
};

export default AddOutreach;
