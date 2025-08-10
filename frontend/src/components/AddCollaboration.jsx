import React, { useState } from 'react';
import collaborationService from '../services/collaborationService';
import '../formsStyle/AddCollaboration.css';

const AddCollaboration = ({ onCollaborationAdded }) => {
  const [formData, setFormData] = useState({
    partnerName: '',
    logo: '',
    description: '',
    link: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

    try {
      const newCollaboration = await collaborationService.addCollaboration(formData);
      if (onCollaborationAdded) {
        onCollaborationAdded(newCollaboration);
      }
      
      setFormData({
        partnerName: '',
        logo: '',
        description: '',
        link: ''
      });
    } catch (err) {
      setError(err.message || 'Failed to add collaboration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="collaboration-form-container">
      <h2>Add New Collaboration</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="collaboration-form">
        <div className="form-group">
          <label htmlFor="partnerName">Partner Name *</label>
          <input
            type="text"
            id="partnerName"
            name="partnerName"
            value={formData.partnerName}
            onChange={handleChange}
            required
            placeholder="Enter partner name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="logo">Logo URL</label>
          <input
            type="url"
            id="logo"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            placeholder="https://example.com/logo.png"
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
            rows="4"
            placeholder="Enter collaboration description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="link">Website Link *</label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
            placeholder="https://example.com"
          />
        </div>

        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Adding...' : 'Add Collaboration'}
        </button>
      </form>
    </div>
  );
};

export default AddCollaboration;
