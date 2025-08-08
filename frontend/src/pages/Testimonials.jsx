import React from 'react';
import TestimonialList from '../components/testimonialList';
import '../styles/Testimonial.css';

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h1>Client Testimonials</h1>
        <p>Discover what our satisfied clients have to say about their experience working with us</p>
      </div>
      
      <TestimonialList />
    </div>
  );
};

export default Testimonials;
