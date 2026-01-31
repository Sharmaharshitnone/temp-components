import React from 'react';

/**
 * GlobalNavigationBar Component
 * 
 * A minimalist, full-width navigation bar with translucent black background
 * and backdrop blur effect.
 * 
 * Features:
 * - Fixed height of 64px
 * - Translucent black background with 12px backdrop blur
 * - Logo 'SYSTEM' on left (Inter Bold)
 * - Centered navigation links (Overview, Deployments, Analytics)
 * - Feedback button on right
 */
const GlobalNavigationBar = ({ 
  logo = 'SYSTEM',
  links = ['Overview', 'Deployments', 'Analytics'],
  feedbackText = 'Feedback',
  onLinkClick,
  onFeedbackClick,
  activeLink
}) => {
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
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    logo: {
      fontSize: '18px',
      fontWeight: 700,
      color: '#ffffff',
      letterSpacing: '0.5px',
      cursor: 'default',
      flex: '0 0 auto',
    },
    linksContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    link: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#888888',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s ease',
      background: 'none',
      border: 'none',
      padding: 0,
      fontFamily: 'inherit',
    },
    linkHover: {
      color: '#ffffff',
    },
    linkActive: {
      color: '#ffffff',
    },
    feedbackButton: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#ffffff',
      backgroundColor: 'transparent',
      border: '1px solid #444',
      borderRadius: '6px',
      padding: '8px 16px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit',
      flex: '0 0 auto',
    },
    feedbackButtonHover: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: '#666',
    },
  };

  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [isFeedbackHovered, setIsFeedbackHovered] = React.useState(false);

  const handleLinkClick = (link) => {
    if (onLinkClick) {
      onLinkClick(link);
    }
  };

  const handleFeedbackClick = () => {
    if (onFeedbackClick) {
      onFeedbackClick();
    }
  };

  return (
    <nav style={styles.navbar} role="navigation" aria-label="Global navigation">
      {/* Logo */}
      <div style={styles.logo}>
        {logo}
      </div>

      {/* Centered Navigation Links */}
      <div style={styles.linksContainer}>
        {links.map((link, index) => (
          <button
            key={`nav-link-${index}`}
            style={{
              ...styles.link,
              ...(hoveredLink === link ? styles.linkHover : {}),
              ...(activeLink === link ? styles.linkActive : {}),
            }}
            onMouseEnter={() => setHoveredLink(link)}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => handleLinkClick(link)}
            aria-current={activeLink === link ? 'page' : undefined}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Feedback Button */}
      <button
        style={{
          ...styles.feedbackButton,
          ...(isFeedbackHovered ? styles.feedbackButtonHover : {}),
        }}
        onMouseEnter={() => setIsFeedbackHovered(true)}
        onMouseLeave={() => setIsFeedbackHovered(false)}
        onClick={handleFeedbackClick}
      >
        {feedbackText}
      </button>
    </nav>
  );
};

export default GlobalNavigationBar;
