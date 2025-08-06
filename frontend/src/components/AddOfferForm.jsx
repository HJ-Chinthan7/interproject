import React, { useState } from 'react';
import outreachService from '../../services/outreachService';

const AddOfferForm = ({ onOfferAdded }) => {
  const [formData, setFormData] = useState({
    title<|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><|reserved_token_163839|><create_file>
<path>frontend/src/components/Outreach/outreachList.jsx</path>
<content>import React, { useState, useEffect } from 'react';
import OutreachCard from './OutreachCard';
import outreachService from '../../services/outreachService';

const OutreachList = () => {
  const [outreachs, setOutreachs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOutreachs();
  }, []);

  const fetchOutreachs = async () => {
    try {
      const response = await outreachService.getAllOutreachs();
      setOutreachs(response.data);
    } catch (error) {
      setError('Failed to load outreach events');
      console.error('Error fetching outreach events:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading outreach events...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="outreach-list">
      <h2>Our Outreach Events</h2>
      <div className="outreach-grid">
        {outreachs.map(outreach => (
          <OutreachCard key={outreach._id} outreach={outreach} />
        ))}
      </div>
    </div>
  );
};

export default OutreachList;
