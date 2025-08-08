import React, { useState, useEffect } from 'react';
import { outreachService } from '../services/outreachService';
import OutreachCard from '../components/OutreachCard';
import AddOutreachForm from '../components/AddOutreachForm';
import '../styles/Outreach.css';

const Outreach = () => {
  const [outreachList, setOutreachList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchOutreachPrograms();
  }, []);

  const fetchOutreachPrograms = async () => {
    try {
      setLoading(true);
      const data = await outreachService.getAllOutreach();
      setOutreachList(data);
      setError(null);
    } catch (err) {
      setError('Failed to load outreach programs. Please try again later.');
      console.error('Error fetching outreach:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddOutreach = async (newOutreach) => {
    try {
      const createdOutreach = await outreachService.createOutreach(newOutreach);
      setOutreachList([createdOutreach, ...outreachList]);
      setShowAddForm(false);
    } catch (err) {
      console.error('Error adding outreach:', err);
      alert('Failed to add outreach program. Please try again.');
    }
  };

  const handleDeleteOutreach = async (id) => {
    if (window.confirm('Are you sure you want to delete this outreach program?')) {
      try {
        await outreachService.deleteOutreach(id);
        setOutreachList(outreachList.filter(outreach => outreach._id !== id));
      } catch (err) {
        console.error('Error deleting outreach:', err);
        alert('Failed to delete outreach program.');
      }
    }
  };

  if (loading) {
    return (
      <div className="outreach-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading outreach programs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="outreach-container">
        <div className="error-message">
          <p>{error}</p>
          <button onClick={fetchOutreachPrograms} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="outreach-container">
      <div className="outreach-header">
        <h1>Community Outreach Programs</h1>
        <p>
          Discover our initiatives to make a positive impact in the community. 
          Join us in our mission to create meaningful change through various outreach activities.
        </p>
        <button 
          className="add-outreach-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add New Outreach'}
        </button>
      </div>

      {showAddForm && (
        <div className="add-outreach-form">
          <AddOutreachForm 
            onAddOutreach={handleAddOutreach}
            onCancel={() => setShowAddForm(false)}
          />
        </div>
      )}

      <div className="outreach-grid">
        {outreachList.length === 0 ? (
          <div className="no-outreach">
            <p>No outreach programs available at the moment.</p>
            <p>Check back soon for new initiatives!</p>
          </div>
        ) : (
          outreachList.map((outreach) => (
            <OutreachCard 
              key={outreach._id} 
              outreach={outreach}
              onDelete={() => handleDeleteOutreach(outreach._id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Outreach;
