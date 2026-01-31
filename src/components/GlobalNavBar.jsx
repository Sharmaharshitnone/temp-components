import React from 'react';
import './GlobalNavBar.css';

/**
 * GlobalNavBar - A minimalist, full-width navigation bar component
 * 
 * Features:
 * - Full width, fixed height (64px)
 * - Translucent Black background with backdrop blur (12px)
 * - Border-bottom: 1px solid #333
 * - Logo 'SYSTEM' on left (Inter Bold)
 * - Links centered (Gray text)
 * - 'Feedback' button on right
 */
const GlobalNavBar = ({ 
  logo = 'SYSTEM',
  links = ['Overview', 'Deployments', 'Analytics'],
  onLinkClick,
  onFeedbackClick 
}) => {
  return (
    <nav className="global-nav-bar">
      <div className="global-nav-bar__logo">
        {logo}
      </div>
      
      <ul className="global-nav-bar__links">
        {links.map((link) => (
          <li key={link} className="global-nav-bar__link-item">
            <a 
              href={`#${link.toLowerCase()}`}
              className="global-nav-bar__link"
              onClick={(e) => {
                if (onLinkClick) {
                  e.preventDefault();
                  onLinkClick(link);
                }
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      
      <button 
        className="global-nav-bar__feedback-btn"
        onClick={onFeedbackClick}
      >
        Feedback
      </button>
    </nav>
  );
};

export default GlobalNavBar;
