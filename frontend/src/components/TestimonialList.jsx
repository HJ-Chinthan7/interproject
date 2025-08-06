import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import testimonialService from '../../services/testimonialService';

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await testimonialService.getAllTestimonials();
      setTestimonials(response.data);
    } catch (error) {
      setError('Failed to load testimonials');
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading testimonials...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="testimonial-list">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
