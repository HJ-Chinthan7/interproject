import React, { useState } from 'react';
import testimonialService from '../../services/testimonialService';

const AddTestimonialForm = ({ onTestimonialAdded }) => {
  const [formData, setFormData] = useState({
    author: '',
    content: '',
    role: '',
    company: '',
    rating: 5
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
      await testimonialService.createTestimonial(formData);
      onTestimonialAdded();
      setFormData({
        author: '',
        content: '',
        role: '',
        company: '',
        rating: 5
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to add testimonial');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-testimonial-form">
      <h3>Add New Testimonial</h3>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Author Name</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Rating</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num} Stars</option>
            ))}
          </select>
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Testimonial'}
        </button>
      </form>
    </div>
  );
};

export default AddTestimonialForm;
