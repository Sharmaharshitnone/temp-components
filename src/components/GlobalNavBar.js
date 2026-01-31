import React from 'react';
import './GlobalNavBar.css';

/**
 * GlobalNavBar Component
 * 
 * A minimalist, full-width navigation bar with:
 * - Fixed height of 64px
 * - Translucent black background with backdrop blur
 * - Logo on the left, navigation links centered, feedback button on right
 */
const GlobalNavBar = () => {
  const navLinks = ['Overview', 'Deployments', 'Analytics'];

  return (
    <nav className="global-nav-bar">
      <div className="nav-content">
        {/* Logo Section */}
        <div className="nav-logo">
          SYSTEM
        </div>

        {/* Navigation Links - Centered */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase()}`} 
                className="nav-link"
                aria-label={`Navigate to ${link}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Feedback Button - Right */}
        <div className="nav-actions">
          <button className="feedback-button" aria-label="Open feedback form">
            Feedback
          </button>
        </div>
      </div>
    </nav>
  );
};

export default GlobalNavBar;
