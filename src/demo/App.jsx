import React from 'react';
import { GlobalNavigationBar } from '../components';

const App = () => {
  const handleFeedbackClick = () => {
    alert('Feedback button clicked!');
  };

  const handleLinkClick = (link) => {
    console.log('Navigating to:', link.label);
  };

  return (
    <div>
      <GlobalNavigationBar
        onFeedbackClick={handleFeedbackClick}
        onLinkClick={handleLinkClick}
      />
      
      {/* Demo content to show the fixed navigation */}
      <main style={{ 
        paddingTop: '64px', 
        minHeight: '200vh',
        color: '#FFFFFF',
        padding: '100px 24px',
      }}>
        <section id="overview" style={{ marginBottom: '100vh' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 700, 
            marginBottom: '16px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Global Navigation Bar
          </h1>
          <p style={{ 
            fontSize: '18px', 
            color: '#888888', 
            maxWidth: '600px',
            lineHeight: 1.6,
            fontFamily: "'Inter', sans-serif"
          }}>
            A minimalist, full-width navigation component with translucent backdrop blur effect.
            Scroll down to see the fixed positioning in action.
          </p>
        </section>

        <section id="deployments" style={{ marginBottom: '100vh' }}>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 600, 
            marginBottom: '16px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Deployments Section
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#888888',
            fontFamily: "'Inter', sans-serif"
          }}>
            This section demonstrates the scroll behavior.
          </p>
        </section>

        <section id="analytics">
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 600, 
            marginBottom: '16px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Analytics Section
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#888888',
            fontFamily: "'Inter', sans-serif"
          }}>
            End of demo content.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
