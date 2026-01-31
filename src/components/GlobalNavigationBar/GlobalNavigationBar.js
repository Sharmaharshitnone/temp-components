import React from 'react';
import './GlobalNavigationBar.css';

/**
 * GlobalNavigationBar Component
 * 
 * A full-width, fixed-height navigation bar with translucent background and backdrop blur.
 * Features: Logo on left, centered navigation links, and feedback button on right.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onFeedbackClick - Callback when feedback button is clicked
 * @param {Function} props.onNavClick - Callback when a navigation link is clicked (receives link name)
 * @param {string} props.activeLink - Currently active navigation link
 */
const GlobalNavigationBar = ({ 
  onFeedbackClick, 
  onNavClick, 
  activeLink = '' 
}) => {
  const navLinks = ['Overview', 'Deployments', 'Analytics'];

  const handleNavClick = (linkName) => {
    if (onNavClick) {
      onNavClick(linkName);
    }
  };

  return (
    <nav className="global-navigation-bar" role="navigation" aria-label="Global Navigation">
      {/* Logo Section */}
      <div className="nav-logo">
        <span className="logo-text">SYSTEM</span>
      </div>

      {/* Centered Navigation Links */}
      <div className="nav-links">
        {navLinks.map((link) => (
          <button
            key={link}
            className={`nav-link ${activeLink === link ? 'active' : ''}`}
            onClick={() => handleNavClick(link)}
            aria-current={activeLink === link ? 'page' : undefined}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Feedback Button */}
      <div className="nav-actions">
        <button 
          className="feedback-button"
          onClick={onFeedbackClick}
          aria-label="Submit Feedback"
        >
          Feedback
        </button>
      </div>
    </nav>
  );
};

export default GlobalNavigationBar;
