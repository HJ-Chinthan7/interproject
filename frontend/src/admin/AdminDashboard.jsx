import React from 'react';
import { useAuth } from '../context/AuthContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome, {user?.name || 'Admin'}!</p>
      </div>
      
      <div className="admin-content">
        <div className="admin-sidebar">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#users">Manage Users</a></li>
            <li><a href="#content">Manage Content</a></li>
            <li><a href="#analytics">Analytics</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </div>
        
        <div className="admin-main">
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
              <button className="admin-btn">Add New User</button>
              <button className="admin-btn">Create Blog Post</button>
              <button className="admin-btn">Manage Services</button>
              <button className="admin-btn">View Reports</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
