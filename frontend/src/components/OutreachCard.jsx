import React from 'react';
import { useAuth } from '../context/AuthContext';

const OutreachCard = ({ outreach, onDelete }) => {
  const { user } = useAuth();
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this outreach?')) {
      try {
        await onDelete(outreach._id);
      } catch (error) {
        console.error('Error deleting outreach:', error);
      }
    }
  };

  return (
    <div className="outreach-card">
      <div className="outreach-image">
        <img src={outreach.image || '/api/placeholder/300/200'} alt={outreach.title} />
      </div>
      <div className="outreach-content">
        <div className="outreach-card-header">
          <h3>{outreach.title}</h3>
          {user?.role === 'admin' && (
            <button 
              className="delete-btn" 
              onClick={handleDelete}
              aria-label="Delete outreach"
            >
              ×
            </button>
          )}
        </div>
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
