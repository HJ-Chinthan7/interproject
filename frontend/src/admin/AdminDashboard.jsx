import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AddBlogForm from '../components/AddBlogForm';
import AddCollaboration from '../components/AddCollaboration';
import AddOutreach from '../components/AddOutreach';
import AddService from '../components/AddService';
import AddPricingForm from '../components/AddPricingForm';
import AddTestimoney from '../components/AddTestimoney';
import AddOffer from '../components/AddOffer';
import ContactList from '../components/ContactList';
import BlogList from '../components/BlogList';
import ServiceList from '../components/ServiceList';
import ColloborationList from '../components/ColloborationList';
import TestimonialList from '../components/TestimonialList';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [selectedSection, setSelectedSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Dashboard Overview', icon: '📊' },
    { id: 'blog', label: 'Manage Blogs', icon: '📝' },
    { id: 'collaboration', label: 'Collaborations', icon: '🤝' },
    { id: 'outreach', label: 'Outreach Services', icon: '📢' },
    { id: 'service', label: 'Services', icon: '⚙️' },
    { id: 'pricing', label: 'Pricing', icon: '💰' },
    { id: 'testimonial', label: 'Testimonials', icon: '⭐' },
    { id: 'offer', label: 'Offers', icon: '🎁' },
    { id: 'contact', label: 'Contact Messages', icon: '📧' }
  ];

  const renderSection = () => {
    switch (selectedSection) {
      case 'blog':
        return (
          <div className="section-container">
            <h2>Manage Blogs</h2>
            <div className="section-content">
              <div className="form-section">
                <h3>Add New Blog</h3>
                <AddBlogForm />
              </div>
              <div className="list-section">
                <h3>Existing Blogs</h3>
                <BlogList />
              </div>
            </div>
          </div>
        );
      
      case 'collaboration':
        return (
          <div className="section-container">
            <h2>Manage Collaborations</h2>
            <div className="section-content">
              <div className="form-section">
                <h3>Add New Collaboration</h3>
                <AddCollaboration />
              </div>
              <div className="list-section">
                <h3>Existing Collaborations</h3>
                <ColloborationList />
              </div>
            </div>
          </div>
        );
      
      case 'outreach':
        return (
          <div className="section-container">
            <h2>Manage Outreach Services</h2>
            <div className="section-content">
              <div className="form-section">
                <h3>Add New Outreach</h3>
                <AddOutreach />
              </div>
            </div>
          </div>
        );
      
      case 'service':
        return (
          <div className="section-container">
            <h2>Manage Services</h2>
            <div className="section-content">
              <div className="form-section">
                <h3>Add New Service</h3>
                <AddService />
              </div>
              <div className="list-section">
                <h3>Existing Services</h3>
                <ServiceList />
              </div>
            </div>
          </div>
        );
      
      case 'pricing':
        return (
          <div className="section-container">
            <h2>Manage Pricing</h2>
            <div className="section-content">
              <div className="form-section">
                <h3>Add New Pricing</h3>
                <AddPricingForm />
              </div>
            </div>
          </div>
        );
      
      case 'testimonial':
        return (
          <div className="section-container">
            <h2>Manage Testimonials</h2>
            <div className="section-content">
              <div className="form-section">
                <h3>Add New Testimonial</h3>
                <AddTestimoney />
              </div>
              <div className="list-section">
                <h3>Existing Testimonials</h3>
                <TestimonialList />
              </div>
            </div>
          </div>
        );
      
      case 'offer':
        return (
          <div className="section-container">
            <h2>Manage Offers</h2>
            <div className="section-content">
              <div className="form-section">
                <h3>Add New Offer</h3>
                <AddOffer />
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="section-container">
            <h2>Contact Messages</h2>
            <ContactList />
          </div>
        );
      
      default:
        return (
          <div>
            <h2>Dashboard Overview</h2>
            <div className="dashboard-stats">
              <div className="stat-card">
                <h3>Total Users</h3>
                <p>1,234</p>
              </div>
              <div className="stat-card">
                <h3>Total Blogs</h3>
                <p>56</p>
              </div>
              <div className="stat-card">
                <h3>Total Services</h3>
                <p>12</p>
              </div>
              <div className="stat-card">
                <h3>Total Orders</h3>
                <p>89</p>
              </div>
            </div>
            
            <div className="admin-actions">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button className="admin-btn" onClick={() => setSelectedSection('blog')}>
                  Add New Blog
                </button>
                <button className="admin-btn" onClick={() => setSelectedSection('service')}>
                  Manage Services
                </button>
                <button className="admin-btn" onClick={() => setSelectedSection('pricing')}>
                  Add Pricing
                </button>
                <button className="admin-btn" onClick={() => setSelectedSection('contact')}>
                  View Messages
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome, {user?.name || 'Admin'}!</p>
      </div>
      
      <div className="admin-content">
        <div className="admin-sidebar">
          <h3>Management Sections</h3>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`sidebar-btn ${selectedSection === section.id ? 'active' : ''}`}
                  onClick={() => setSelectedSection(section.id)}
                >
                  <span className="icon">{section.icon}</span>
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="admin-main">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
