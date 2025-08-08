import React from 'react';
import { useAuth } from '../context/AuthContext';
import testimonialService from '../services/testimonialService';
import '../styles/TestimonialCard.css';

const TestimonialCard = ({ testimonial, onDelete }) => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await testimonialService.deleteTestimonial(testimonial._id);
        onDelete(testimonial._id);
      } catch (error) {
        console.error('Error deleting testimonial:', error);
        alert('Failed to delete testimonial');
      }
    }
  };

  return (
    <div className="testimonial-card">
      {isAdmin && (
        <button 
          className="delete-button" 
          onClick={handleDelete} 
          title="Delete testimonial"
          aria-label="Delete testimonial"
        >
          ✕
        </button>
      )}
      
      {testimonial.image && (
        <div className="testimonial-image">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
      )}
      
      <div className="testimonial-content">
        <blockquote className="testimonial-message">
          "{testimonial.message}"
        </blockquote>
        
        <div className="testimonial-author">
          <h4 className="author-name">{testimonial.name}</h4>
          <p className="author-designation">{testimonial.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
