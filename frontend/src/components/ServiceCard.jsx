import React from 'react';
import { useAuth } from '../context/AuthContext';
import serviceService from '../services/serviceService';
import '../styles/ServiceCard.css';

const ServiceCard = ({ service, onDelete }) => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  const handleDelete = async () => {
      try {
        await serviceService.deleteService(service._id);
        onDelete(service._id);
      } catch (error) {
        console.error('Error deleting service:', error);
        alert('Failed to delete service');
      }
    
  };

  return (
    <div className="service-card">
      {isAdmin && (
        <button 
          className="delete-button" 
          onClick={handleDelete} 
          title="Delete service"
          aria-label="Delete service"
        >
          ✕
        </button>
      )}
      
      <div className="service-content">
        {service.icon && (
          <div className="service-icon-container">
            <i className={`service-icon ${service.icon}`}></i>
          </div>
        )}
        
        <div className="service-details">
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
