import React, { useState } from 'react';
import collaborationService from '../services/collaborationService';

const AddCollaborationForm = ({ onCollaborationAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'partnership',
    status: 'active',
    image: ''
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
      await collaborationService.addCollaboration(formData);
      onCollaborationAdded();
      setFormData({
        title: '',
        description: '',
        type: 'partnership',
        status: 'active',
        image: ''
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to add collaboration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-collaboration-form">
      <h3>Add New Collaboration</h3>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="partnership">Partnership</option>
            <option value="sponsorship">Sponsorship</option>
            <option value="affiliate">Affiliate</option>
            <option value="joint-venture">Joint Venture</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Collaboration'}
        </button>
      </form>
    </div>
  );
};

export default AddCollaborationForm;
