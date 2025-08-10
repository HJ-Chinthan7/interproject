import React, { useState, useEffect } from 'react';
import OutreachCard from '../components/OutreachCard';
import outreachService from '../services/outreachService';
import '../styles/Outreach.css';

const Outreach = () => {
  const [outreach, setOutreach] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOutreach();
  }, []);

  const fetchOutreach = async () => {
    try {
      const response = await outreachService.getAllOutreach();
      setOutreach(response);
    } catch (error) {
      setError('Failed to load outreach programs');
      console.error('Error fetching outreach:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setOutreach(prev => prev.filter(item => item._id !== id));
  };

  if (loading) return <div className="loading">Loading outreach programs...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="outreach-container">
      <h2 className="outreach-title">Community Outreach Programs</h2>
      
      {outreach.length === 0 ? (
        <div className="empty-state">
          <p>No outreach programs available at the moment.</p>
        </div>
      ) : (
        <div className="outreach-grid">
          {outreach.map(item => (
            <OutreachCard 
              key={item._id} 
              outreach={item} 
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Outreach;
