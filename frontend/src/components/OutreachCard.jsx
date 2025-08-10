import React from 'react';
import { useAuth } from '../context/AuthContext';
import outreachService from '../services/outreachService';
import '../styles/OutreachCard.css';

const OutreachCard = ({ outreach, onDelete }) => {
  const { isAdmin } = useAuth();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this outreach program?')) {
      try {
        await outreachService.deleteOutreach(outreach._id);
        onDelete(outreach._id);
      } catch (error) {
        console.error('Error deleting outreach:', error);
        alert('Failed to delete outreach program');
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="outreach-card">
      {isAdmin && (
        <button 
          className="outreach-delete-btn" 
          onClick={handleDelete}
          title="Delete outreach program"
          aria-label="Delete outreach program"
        >
          ✕
        </button>
      )}
      
      <div className="outreach-card-content">
        <div className="outreach-header">
          <h3 className="outreach-title">{outreach.title}</h3>
          {outreach.type && (
            <span className="outreach-type-badge">{outreach.type}</span>
          )}
        </div>
        
        <p className="outreach-description">{outreach.description}</p>
        
        <div className="outreach-details">
          <div className="detail-row">
            <span className="detail-label">Date:</span>
            <span className="detail-value">{formatDate(outreach.date)}</span>
          </div>
          
          <div className="detail-row">
            <span className="detail-label">Location:</span>
            <span className="detail-value">{outreach.location}</span>
          </div>
          
          {outreach.partners && (
            <div className="detail-row">
              <span className="detail-label">Partners:</span>
              <span className="detail-value">{outreach.partners}</span>
            </div>
          )}
          
          {outreach.contact_email && (
            <div className="detail-row">
              <span className="detail-label">Contact:</span>
              <a href={`mailto:${outreach.contact_email}`} className="contact-link">
                {outreach.contact_email}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutreachCard;
