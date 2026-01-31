import './GlobalNavigationBar.css';

/**
 * GlobalNavigationBar - A minimalist, airy navigation component
 * 
 * Features:
 * - Full width, fixed height (64px)
 * - Translucent black background with backdrop blur
 * - Logo 'SYSTEM' on left, navigation links centered, Feedback button on right
 */
function GlobalNavigationBar() {
  return (
    <nav className="global-nav">
      <div className="global-nav-content">
        {/* Logo on the left */}
        <div className="global-nav-logo">
          SYSTEM
        </div>

        {/* Navigation links centered */}
        <div className="global-nav-links">
          <a href="#overview" className="global-nav-link">Overview</a>
          <a href="#deployments" className="global-nav-link">Deployments</a>
          <a href="#analytics" className="global-nav-link">Analytics</a>
        </div>

        {/* Feedback button on the right */}
        <div className="global-nav-actions">
          <button className="global-nav-feedback-btn">
            Feedback
          </button>
        </div>
      </div>
    </nav>
  );
}

export default GlobalNavigationBar;
