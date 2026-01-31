import React from 'react';

/**
 * GlobalNavigationBar Component
 * 
 * A minimalist, full-width navigation bar with the following features:
 * - Fixed height of 64px
 * - Translucent black background with backdrop blur
 * - Logo 'SYSTEM' on left (Inter Bold)
 * - Navigation links centered (Overview, Deployments, Analytics)
 * - Feedback button on right
 * 
 * @param {Object} props
 * @param {string} [props.logo] - Logo text (default: 'SYSTEM')
 * @param {Array<{label: string, href: string}>} [props.links] - Navigation links
 * @param {string} [props.feedbackText] - Feedback button text (default: 'Feedback')
 * @param {Function} [props.onFeedbackClick] - Feedback button click handler
 * @param {Function} [props.onLinkClick] - Navigation link click handler
 */
const GlobalNavigationBar = ({
  logo = 'SYSTEM',
  links = [
    { label: 'Overview', href: '#overview' },
    { label: 'Deployments', href: '#deployments' },
    { label: 'Analytics', href: '#analytics' },
  ],
  feedbackText = 'Feedback',
  onFeedbackClick,
  onLinkClick,
}) => {
  const styles = {
    nav: {
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
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 700,
      fontSize: '18px',
      color: '#FFFFFF',
      letterSpacing: '0.5px',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    linksContainer: {
      display: 'flex',
      gap: '32px',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    link: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 400,
      fontSize: '14px',
      color: '#888888',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s ease',
      background: 'none',
      border: 'none',
      padding: 0,
    },
    feedbackButton: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 500,
      fontSize: '14px',
      color: '#FFFFFF',
      backgroundColor: 'transparent',
      border: '1px solid #444',
      borderRadius: '6px',
      padding: '8px 16px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
  };

  const handleLinkClick = (e, link) => {
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick(link);
    }
  };

  const handleFeedbackClick = () => {
    if (onFeedbackClick) {
      onFeedbackClick();
    }
  };

  return (
    <nav style={styles.nav} role="navigation" aria-label="Global navigation">
      <div style={styles.logo}>{logo}</div>
      
      <div style={styles.linksContainer}>
        {links.map((link) => (
          <a
            key={link.href || link.label}
            href={link.href}
            style={styles.link}
            onClick={(e) => handleLinkClick(e, link)}
            onMouseEnter={(e) => {
              e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#888888';
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
      
      <button
        style={styles.feedbackButton}
        onClick={handleFeedbackClick}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          e.target.style.borderColor = '#666';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.borderColor = '#444';
        }}
      >
        {feedbackText}
      </button>
    </nav>
  );
};

export default GlobalNavigationBar;
