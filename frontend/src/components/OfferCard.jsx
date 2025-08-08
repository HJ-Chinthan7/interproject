import React from 'react';
import '../styles/offercard.css';

const OfferCard = ({ offer, isAdmin, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateDaysRemaining = (validTill) => {
    const today = new Date();
    const validDate = new Date(validTill);
    const diffTime = validDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = calculateDaysRemaining(offer.validTill);
  const isExpired = daysRemaining < 0;

  return (
    <div className={`offer-card ${isExpired ? 'expired' : ''}`}>
      {isAdmin && (
        <button 
          className="delete-button" 
          onClick={()=> onDelete(offer._id)} 
          title="Delete offer"
          aria-label="Delete offer"
        >
          ✕
        </button>
      )}
      
      <div className="offer-content">
        <div className="offer-header">
          <h3 className="offer-title">{offer.title}</h3>
          {isExpired && <span className="expired-badge">Expired</span>}
        </div>
        
        <p className="offer-description">{offer.description}</p>
        
        <div className="offer-validity-section">
          <div className="validity-info">
            <span className="validity-label">Valid Until:</span>
            <span className="validity-date">{formatDate(offer.validTill)}</span>
          </div>
          
          <div className="days-remaining">
            {isExpired ? (
              <span className="expired-text">This offer has expired</span>
            ) : daysRemaining === 0 ? (
              <span className="urgent-text">Expires today!</span>
            ) : daysRemaining === 1 ? (
              <span className="urgent-text">Expires tomorrow!</span>
            ) : (
              <span className="remaining-text">{daysRemaining} days remaining</span>
            )}
          </div>
        </div>
        
        <div className="offer-actions">
          <button 
            className={`btn-primary ${isExpired ? 'disabled' : ''}`} 
            disabled={isExpired}
            aria-label={isExpired ? 'Offer expired' : 'View offer details'}
          >
            {isExpired ? 'Expired' : 'View Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
