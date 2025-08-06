import React from 'react';

const CollaborationCard = ({ collaboration }) => {
  return (
    <div className="collaboration-card">
      <div className="collaboration-image">
        <img src={collaboration.image || '/api/placeholder/300/200'} alt={collaboration.title} />
      </div>
      <div className="collaboration-content">
        <h3>{collaboration.title}</h3>
        <p>{collaboration.description}</p>
        <div className="collaboration-type">
          <span className="type-badge">{collaboration.type}</span>
        </div>
        <div className="collaboration-status">
          <span className={`status-badge ${collaboration.status}`}>
            {collaboration.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollaborationCard;
