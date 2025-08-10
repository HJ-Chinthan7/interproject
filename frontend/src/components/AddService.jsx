import React, { useState } from 'react';
import serviceService from '../services/serviceService';
import '../formsStyle/AddService.css';

const AddService = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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
    setMessage('');

    try {
      await serviceService.createService(formData);
      setMessage('Service created successfully!');
      setFormData({
        title: '',
        description: '',
        icon: ''
      });
    } catch (error) {
      setMessage('Error creating service. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-service-container">
      <h2>Add New Service</h2>
      
      {message && (
        <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="add-service-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter service title"
            className="form-input"
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
            placeholder="Enter service description"
            className="form-textarea"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="icon">Icon *</label>
          <input
            type="text"
            id="icon"
            name="icon"
            value={formData.icon}
            onChange={handleChange}
            required
            placeholder="Enter icon name (e.g., fa-home, fa-cog)"
            className="form-input"
          />
          <small className="form-help">
            Use Font Awesome icon names like 'fa-home', 'fa-cog', etc.
          </small>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Service'}
        </button>
      </form>
    </div>
  );
};

export default AddService;
