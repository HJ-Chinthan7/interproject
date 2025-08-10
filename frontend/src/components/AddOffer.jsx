import React, { useState } from 'react';
import offerService from '../services/offerService';
import '../formsStyle/AddOffer.css';

const AddOffer = ({ onOfferAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    validTill: ''
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
      const newOffer = await offerService.createOffer(formData);
      if (onOfferAdded) {
        onOfferAdded(newOffer);
      }
      
      setFormData({
        title: '',
        description: '',
        validTill: ''
      });
    } catch (err) {
      setError(err.message || 'Failed to create offer');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="offer-form-container">
      <h2>Add New Offer</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="offer-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter offer title"
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
            placeholder="Enter offer description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="validTill">Valid Till *</label>
          <input
            type="date"
            id="validTill"
            name="validTill"
            value={formData.validTill}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <button type="submit" disabled={loading} className="submit-button">
          {loading ? 'Creating...' : 'Create Offer'}
        </button>
      </form>
    </div>
  );
};

export default AddOffer;
