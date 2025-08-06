import React from 'react';

const OfferCard = ({ offer }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="offer-card">
      <div className="offer-image">
        <img src={offer.image || '/api/placeholder/300/200'} alt={offer.title} />
      </div>
      <div className="offer-content">
        <h3>{offer.title}</h3>
        <p>{offer.description}</p>
        <div className="offer-price">
          <span className="original-price">${offer.originalPrice}</span>
          <span className="discounted-price">${offer.discountedPrice}</span>
        </div>
        <div className="offer-validity">
          <span>Valid until: {formatDate(offer.validUntil)}</span>
        </div>
        <div className="offer-discount">
          <span className="discount-badge">{offer.discountPercentage}% OFF</span>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
