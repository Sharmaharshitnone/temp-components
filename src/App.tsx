import React from 'react';
import GlobalNavBar from './components/GlobalNavBar';
import './App.css';

function App() {
  const handleFeedbackClick = () => {
    console.log('Feedback clicked');
  };

  const handleNavLinkClick = (link: string) => {
    console.log(`Navigation link clicked: ${link}`);
  };

  return (
    <div className="App">
      <GlobalNavBar 
        onFeedbackClick={handleFeedbackClick}
        onNavLinkClick={handleNavLinkClick}
      />
      
      {/* Demo content to show the translucent effect */}
      <main className="demo-content">
        <div className="gradient-background">
          <section className="hero-section">
            <h1>Global Navigation Bar Demo</h1>
            <p>Scroll down to see the translucent effect with backdrop blur</p>
          </section>
          
          <section className="content-section">
            <div className="content-card">
              <h2>Overview</h2>
              <p>View your project statistics and key metrics at a glance.</p>
            </div>
            <div className="content-card">
              <h2>Deployments</h2>
              <p>Manage and monitor your deployment pipelines.</p>
            </div>
            <div className="content-card">
              <h2>Analytics</h2>
              <p>Deep dive into your application performance data.</p>
            </div>
          </section>
          
          <section className="spacer-section">
            <p>Additional content to demonstrate scrolling behavior...</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
