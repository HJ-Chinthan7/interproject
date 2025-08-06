import React from 'react';

const OutreachCard = ({ outreach }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="outreach-card">
      <div className="outreach-image">
        <img src={outreach.image || '/api/placeholder/300/200'} alt={outreach.title} />
      </div>
      <div className="outreach-content">
        <h3>{outreach.title}</h3>
        <p>{outreach.description}</p>
        <div className="outreach-meta">
          <span className="outreach-date">{formatDate(outreach.date)}</span>
          <span className="outreach-location">{outreach.location}</span>
        </div>
        <div className="outreach-type">
          <span className="type-badge">{outreach.type}</span>
        </div>
      </div>
    </div>
  );
};

export default OutreachCard;
