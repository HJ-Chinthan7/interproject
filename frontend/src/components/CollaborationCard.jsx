import React from 'react';
import { useAuth } from '../context/AuthContext';
import collaborationService from '../services/collaborationService';
import '../styles/CollaborationCard.css';

const CollaborationCard = ({ collaboration, onDelete }) => {
  const { isAdmin } = useAuth();

  const handleDelete = async () => {
      try {
        await collaborationService.deleteCollaboration(collaboration._id);
        onDelete(collaboration._id);
      } catch (error) {
        console.error('Error deleting collaboration:', error);
        alert('Failed to delete collaboration');
      }
    
  };

  return (
    <div className="collaboration-card">
      {isAdmin && (
        <button 
          className="delete-button" 
          onClick={handleDelete} 
          title="Delete collaboration"
          aria-label="Delete collaboration"
        >
          ✕
        </button>
      )}
      
      <div className="collaboration-logo">
        <img 
          src={collaboration.logo || collaboration.image || '/api/placeholder/300/200'} 
          alt={collaboration.partnerName || collaboration.title} 
          loading="lazy"
        />
      </div>
      
      <div className="collaboration-content">
        <h3 className="partner-name">{collaboration.partnerName || collaboration.title}</h3>
        <p className="partner-description">{collaboration.description}</p>
        
        {collaboration.link && (
          <a 
            href={collaboration.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="partner-link"
            aria-label={`Visit ${collaboration.partnerName || collaboration.title}`}
          >
            Visit Partner →
          </a>
        )}
        
        {collaboration.type && (
          <div className="collaboration-type">
            <span className="type-badge">{collaboration.type}</span>
          </div>
        )}
        
        {collaboration.status && (
          <div className="collaboration-status">
            <span className={`status-badge ${collaboration.status}`}>
              {collaboration.status}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollaborationCard;
