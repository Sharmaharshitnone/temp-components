import React, { useState } from 'react';

/**
 * GlobalNavBar Component
 * 
 * A minimalist, airy navigation bar with:
 * - Full width, fixed height (64px)
 * - Translucent black background with backdrop blur
 * - Logo on the left, centered navigation links, feedback button on right
 * 
 * @param {Object} props
 * @param {Function} props.onFeedbackClick - Optional callback when feedback button is clicked
 */
const GlobalNavBar = ({ onFeedbackClick }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isFeedbackHovered, setIsFeedbackHovered] = useState(false);

  const styles = {
    navbar: {
      width: '100%',
      height: '64px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #333',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      boxSizing: 'border-box',
    },
    logo: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: '18px',
      color: '#FFFFFF',
      letterSpacing: '0.5px',
      margin: 0,
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    navLink: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: '14px',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s ease',
      background: 'none',
      border: 'none',
      padding: 0,
    },
    feedbackButton: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: '14px',
      color: '#FFFFFF',
      borderRadius: '6px',
      padding: '8px 16px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
  };

  const navItems = ['Overview', 'Deployments', 'Analytics'];

  const getNavLinkStyle = (item) => ({
    ...styles.navLink,
    color: hoveredLink === item ? '#FFFFFF' : '#888888',
  });

  const getFeedbackButtonStyle = () => ({
    ...styles.feedbackButton,
    backgroundColor: isFeedbackHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    border: isFeedbackHovered ? '1px solid #666' : '1px solid #444',
  });

  return (
    <nav style={styles.navbar} role="navigation" aria-label="Main navigation">
      <h1 style={styles.logo}>SYSTEM</h1>
      
      <div style={styles.navLinks}>
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            style={getNavLinkStyle(item)}
            onMouseEnter={() => setHoveredLink(item)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {item}
          </a>
        ))}
      </div>
      
      <button 
        style={getFeedbackButtonStyle()}
        onMouseEnter={() => setIsFeedbackHovered(true)}
        onMouseLeave={() => setIsFeedbackHovered(false)}
        onClick={onFeedbackClick}
        aria-label="Send feedback"
      >
        Feedback
      </button>
    </nav>
  );
};

export default GlobalNavBar;
