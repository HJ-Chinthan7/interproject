import React from 'react';
import ServiceList from '../components/ServiceList';
import '../styles/ServiceList.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <ServiceList />
      </div>
    </div>
  );
};

export default Services;
