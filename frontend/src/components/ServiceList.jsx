import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import serviceService from '../services/serviceService';
import '../styles/ServiceList.css';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await serviceService.getAllServices();
      setServices(response.data);
    } catch (error) {
      setError('Failed to load services');
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setServices(prev => prev.filter(service => service._id !== id));
  };

  if (loading) return <div className="loading">Loading services...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="service-list-container">
      <h2 className="service-list-title">Our Services</h2>
      
      {services.length === 0 ? (
        <div className="empty-state">
          <p>No services available at the moment.</p>
        </div>
      ) : (
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard 
              key={service._id} 
              service={service} 
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceList;
