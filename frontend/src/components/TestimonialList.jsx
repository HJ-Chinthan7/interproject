import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import testimonialService from '../services/testimonialService';
import { useAuth } from '../context/AuthContext';
import '../styles/TestimonialList.css';

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await testimonialService.getTestimonials();
      setTestimonials(response.data || response);
    } catch (error) {
      setError('Failed to load testimonials');
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setTestimonials(prev => prev.filter(testimonial => testimonial._id !== id));
  };

  if (loading) return <div className="loading">Loading testimonials...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="testimonial-list-container">
      <h2 className="testimonial-list-title">Client Testimonials</h2>
      
      {testimonials.length === 0 ? (
        <div className="empty-state">
          <p>No testimonials available at the moment.</p>
        </div>
      ) : (
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial._id} 
              testimonial={testimonial} 
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialList;
