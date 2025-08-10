import React from 'react';
import CollaborationList from '../components/ColloborationList';
import '../styles/Collaborations.css';

const Collaborations = () => {

  return (
    <div className="collaborations-page">
      <div className="collaborations-header">
        <h1 className="collaborations-title">Our Collaborations</h1>
        <p className="collaborations-subtitle">
          Discover our strategic partnerships and collaborative initiatives
        </p>
      </div>

      <div className="collaborations-content">
        <CollaborationList />
      </div>
    </div>
  );
};

export default Collaborations;
