import React, { useState, useEffect } from 'react';
import OfferCard from '../components/OfferCard';
import { useAuth } from '../context/AuthContext';
import  offerService  from '../services/offerService';
import '../styles/offer.css';
import '../styles/offerlist.css';

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAdmin } = useAuth();

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      setLoading(true);
      const data = await offerService.getAllOffers();
      setOffers(data?.data);
    } catch (err) {
      setError('Failed to load offers');
      console.error('Error fetching offers:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this offer?')) {
      try {
        console.log("here in the frontend",id);
        await offerService.deleteOffer(id);
        setOffers(offers.filter(offer => offer._id !== id));
      } catch (err) {
        setError('Failed to delete offer');
        console.error('Error deleting offer:', err);
      }
    }
  };

  if (loading) return <div className="loading">Loading offers...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="offers-container">
      <div className="offers-header">
        <h1>Special Offers</h1>
        <p>Discover our latest deals and promotions</p>
      </div>
      
      <div className="offers-list">
        {offers.length === 0 ? (
          <div className="no-offers">
            <p>No offers available at the moment</p>
          </div>
        ) : (
          <div className="offers-grid">
            {offers.map((offer) => (
              <OfferCard 
                key={offer._id} 
                offer={offer} 
                isAdmin={isAdmin}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Offers;
