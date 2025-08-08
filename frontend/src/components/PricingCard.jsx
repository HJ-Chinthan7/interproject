import React from 'react';
import '../styles/PricingCard.css';

const PricingCard = ({ pricing, isAdmin, onDelete }) => {
  return (
    <div className="pricing-card">
      {isAdmin && (
        <button 
          className="pricing-card-delete" 
          onClick={onDelete}
          title="Delete pricing plan"
        >
          ×
        </button>
      )}
      
      <div className="pricing-card-header">
        <h3 className="pricing-card-title">{pricing.planName}</h3>
        <div className="pricing-card-price">${pricing.price}</div>
      </div>
      
      <ul className="pricing-card-features">
        {pricing.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
