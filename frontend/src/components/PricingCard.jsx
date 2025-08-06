import React from 'react';

const PricingCard = ({ pricing }) => {
  return (
    <div className="pricing-card">
      <div className="pricing-header">
        <h3>{pricing.title}</h3>
        <p className="pricing-description">{pricing.description}</p>
      </div>
      <div className="pricing-content">
        <div className="pricing-price">
          <span className="price">${pricing.price}</span>
          <span className="period">/{pricing.period}</span>
        </div>
        <ul className="pricing-features">
          {pricing.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="pricing-cta">
          <button className="btn-primary">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
