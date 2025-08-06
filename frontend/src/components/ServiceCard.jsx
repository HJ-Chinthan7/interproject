import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={service.image || '/api/placeholder/300/200'} alt={service.title} />
      </div>
      <div className="service-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-price">
          <span>${service.price}</span>
        </div>
        <div className="service-features">
          {service.features?.map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
