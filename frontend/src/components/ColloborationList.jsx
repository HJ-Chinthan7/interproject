import React, { useState, useEffect } from 'react';
import CollaborationCard from './CollaborationCard';
import collaborationService from '../services/collaborationService';
import '../styles/CollaborationList.css';

const CollaborationList = () => {
  const [collaborations, setCollaborations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCollaborations();
  }, []);

  const fetchCollaborations = async () => {
    try {
      const response = await collaborationService.getAllCollaborations();
      setCollaborations(response.data);
    } catch (error) {
      setError('Failed to load collaborations');
      console.error('Error fetching collaborations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setCollaborations(prev => prev.filter(collab => collab._id !== id));
  };

  if (loading) return <div className="loading">Loading collaborations...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="collaboration-list-container">
      <h2 className="collaboration-list-title">Our Collaborations</h2>
      {collaborations.length === 0 ? (
        <div className="empty-state">
          <p>No collaborations available at the moment.</p>
        </div>
      ) : (
        <div className="collaborations-grid">
          {collaborations.map(collab => (
            <CollaborationCard 
              key={collab._id} 
              collaboration={collab} 
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollaborationList;
