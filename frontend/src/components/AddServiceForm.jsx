import React, { useState } from 'react';
import serviceService from '../../services/serviceService';

const AddServiceForm = ({ onServiceAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    features: [],
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

  const handleFeaturesChange = (e) => {
    const features = e.target.value.split(',').map(f => f.trim());
    setFormData(prev => ({
      ...prev,
      features
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await serviceService.createService(formData);
      onServiceAdded();
      setFormData({
        title: '',
        description: '',
        price: '',
        features: [],
        image: ''
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to add service');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-service-form">
      <h3>Add New Service</h3>
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
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Features (comma-separated)</label>
          <input
            type="text"
            name="features"
            value={formData.features.join(', ')}
            onChange={handleFeaturesChange}
            placeholder="Feature 1, Feature 2, Feature 3"
          />
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
          {loading ? 'Adding...' : 'Add Service'}
        </button>
      </form>
    </div>
  );
};

export default AddServiceForm;
