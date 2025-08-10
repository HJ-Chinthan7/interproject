import React, { useState, useEffect } from 'react';
import { getAllPricing, deletePricing } from '../services/pricingService';
import { useAuth } from '../context/AuthContext';
import PricingCard from '../components/PricingCard';
import '../styles/Pricing.css';

const Pricing = () => {
  const [pricing, setPricing] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      const data = await getAllPricing();
      setPricing(data.data);
    } catch (error) {
      console.error('Error fetching pricing:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
      try {
        await deletePricing(id);
        setPricing(pricing.filter(item => item._id !== id));
      } catch (error) {
        console.error('Error deleting pricing:', error);
      }
    
  };

  if (loading) {
    return <div className="loading">Loading pricing plans...</div>;
  }

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Pricing Plans</h1>
        <p>Choose the perfect plan for your needs</p>
      </div>
      
      <div className="pricing-grid">
        {pricing.map((plan) => (
          <PricingCard
            key={plan._id}
            pricing={plan}
            isAdmin={user?.role === 'admin'}
            onDelete={() => handleDelete(plan._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
