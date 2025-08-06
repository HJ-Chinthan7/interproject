import React, { useState, useEffect } from 'react';
import CollaborationCard from './CollaborationCard';
import collaborationService from '../../services/collaborationService';

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

  if (loading) return <div className="loading">Loading collaborations...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="collaboration-list">
      <h2>Our Collaborations</h2>
      <div className="collaborations-grid">
        {collaborations.map(collab => (
          <CollaborationCard key={collab._id} collaboration={collab} />
        ))}
      </div>
    </div>
  );
};

export default CollaborationList;
