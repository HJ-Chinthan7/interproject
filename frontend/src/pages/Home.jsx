import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OfferCard from '../components/OfferCard';
import OutreachCard from '../components/OutreachCard';
import offerService from '../services/offerService';
import outreachService from '../services/outreachService';
import '../styles/Home.css';

const Home = () => {
  const [offers, setOffers] = useState([]);
  const [outreach, setOutreach] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [offersData, outreachData] = await Promise.all([
          offerService.getAllOffers(),
          outreachService.getAllOutreach()
        ]);

        setOffers(offersData?.offers?.slice(0, 2) || []);
        setOutreach(outreachData?.outreach?.slice(0, 3) || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="home-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome</h1>
        <p>Discover our latest offers and outreach programs</p>
      </section>

      {offers.length > 0 && (
        <section className="offers">
          <h2>Latest Offers</h2>
          <div className="offers-grid">
            {offers.map(offer => (
              <OfferCard key={offer._id} offer={offer} />
            ))}
          </div>
        </section>
      )}

      {outreach.length > 0 && (
        <section className="outreach">
          <h2>Our Outreach</h2>
          <div className="outreach-grid">
            {outreach.map(item => (
              <OutreachCard key={item._id} outreach={item} />
            ))}
          </div>
        </section>
      )}

      <section className="cta">
        <Link to="/contact" className="btn">Get in Touch</Link>
      </section>
    </div>
  );
};

export default Home;
