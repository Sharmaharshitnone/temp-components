import React from 'react';
import './GlobalNavBar.css';

export interface GlobalNavBarProps {
  onFeedbackClick?: () => void;
  onNavLinkClick?: (link: string) => void;
}

const GlobalNavBar: React.FC<GlobalNavBarProps> = ({ 
  onFeedbackClick, 
  onNavLinkClick 
}) => {
  const navLinks = ['Overview', 'Deployments', 'Analytics'];

  const handleNavLinkClick = (link: string) => {
    if (onNavLinkClick) {
      onNavLinkClick(link);
    }
  };

  return (
    <nav className="global-nav-bar" role="navigation" aria-label="Global navigation">
      <div className="nav-content">
        {/* Logo on the left */}
        <div className="nav-logo">
          SYSTEM
        </div>

        {/* Centered navigation links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <button 
                className="nav-link"
                onClick={() => handleNavLinkClick(link)}
                type="button"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Feedback button on the right */}
        <button 
          className="feedback-button"
          onClick={onFeedbackClick}
          type="button"
        >
          Feedback
        </button>
      </div>
    </nav>
  );
};

export default GlobalNavBar;
