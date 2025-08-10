import React, { useState } from 'react';
import { addPricing } from '../services/pricingService';
import '../formsStyle/AddPricing.css';

const AddPricingForm = () => {
  const [formData, setFormData] = useState({
    planName: '',
    price: '',
    features: ['']
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

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index) => {
    if (formData.features.length > 1) {
      const newFeatures = formData.features.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        features: newFeatures
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      
      const filteredFeatures = formData.features.filter(feature => feature.trim() !== '');
      
      const pricingData = {
        planName: formData.planName,
        price: parseFloat(formData.price),
        features: filteredFeatures
      };

      await addPricing(pricingData);
      setSuccess(true);
      
     
      setFormData({
        planName: '',
        price: '',
        features: ['']
      });
      
    
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add pricing plan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-pricing-container">
      <form className="add-pricing-form" onSubmit={handleSubmit}>
        <h2>Add New Pricing Plan</h2>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Pricing plan added successfully!</div>}
        
        <div className="form-group">
          <label htmlFor="planName">Plan Name *</label>
          <input
            type="text"
            id="planName"
            name="planName"
            value={formData.planName}
            onChange={handleChange}
            required
            placeholder="e.g., Basic, Premium, Enterprise"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price *</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            placeholder="0.00"
          />
        </div>

        <div className="form-group">
          <label>Features *</label>
          {formData.features.map((feature, index) => (
            <div key={index} className="feature-input-group">
              <input
                type="text"
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                placeholder={`Feature ${index + 1}`}
                required
              />
              <button
                type="button"
                className="remove-feature-btn"
                onClick={() => removeFeature(index)}
                disabled={formData.features.length === 1}
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            className="add-feature-btn"
            onClick={addFeature}
          >
            + Add Feature
          </button>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Adding...' : 'Add Pricing Plan'}
        </button>
      </form>
    </div>
  );
};

export default AddPricingForm;
