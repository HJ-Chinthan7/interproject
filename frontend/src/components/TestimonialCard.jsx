import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-text">
          <p>"{testimonial.content}"</p>
        </div>
        <div className="testimonial-author">
          <h4>{testimonial.author}</h4>
          <span className="testimonial-role">{testimonial.role}</span>
          <span className="testimonial-company">{testimonial.company}</span>
        </div>
        <div className="testimonial-rating">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="star">★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
