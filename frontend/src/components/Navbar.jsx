import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout, userRole } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };                                            


  const loggedInNavItems = [
    { path: '/home', label: 'Home' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/collaborations', label: 'Collaborations' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/offers', label: 'Offers' },
    { path: '/outreach', label: 'Outreach' },
    { path: '/services', label: 'Services' },
  ];

  
  const publicNavItems = [
    { path: '/', label: 'Home' },
    { path: '/login', label: 'SignIn' },
    { path: '/register', label: 'SignUp' },
  ];

  const navItems = user ? loggedInNavItems : publicNavItems;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          YourBrand
        </Link>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link to={item.path} className="nav-link auth-link" onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
          
          {user && userRole === 'admin' && (
            <li className="nav-item">
              <Link to="/admin" className="nav-link admin-link" onClick={closeMenu}>
                Admin Dashboard
              </Link>
            </li>
          )}
          
          {user && (
            <>
              <li className="nav-item">
                <span className="nav-link welcome-text">Welcome, {user.firstName || user.name}</span>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link logout-btn">
                  Sign Out
                </button>
              </li>
            </>
          ) 
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
