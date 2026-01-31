import React, { useState } from 'react';
import GlobalNavigationBar from './components/GlobalNavigationBar';
import './App.css';

function App() {
  const [activeLink, setActiveLink] = useState('Overview');

  const handleNavClick = (linkName) => {
    setActiveLink(linkName);
    console.log(`Navigated to: ${linkName}`);
  };

  const handleFeedbackClick = () => {
    console.log('Feedback button clicked');
    alert('Feedback form would open here');
  };

  return (
    <div className="app">
      <GlobalNavigationBar 
        activeLink={activeLink}
        onNavClick={handleNavClick}
        onFeedbackClick={handleFeedbackClick}
      />
      
      {/* Demo content to show the fixed navbar behavior */}
      <main className="main-content">
        <h1>Global Navigation Bar Demo</h1>
        <p>The navigation bar above is fixed at the top with:</p>
        <ul>
          <li>Full width, 64px fixed height</li>
          <li>Translucent black background with backdrop blur (12px)</li>
          <li>Border-bottom: 1px solid #333</li>
          <li>'SYSTEM' logo on the left (Inter Bold)</li>
          <li>Centered navigation links (Gray text)</li>
          <li>'Feedback' button on the right</li>
          <li>Minimalist, airy design</li>
        </ul>
        <p>Scroll down to see the blur effect in action.</p>
        
        {/* Extra content for scrolling demo */}
        <div className="scroll-content">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="content-block">
              <h2>Section {i + 1}</h2>
              <p>Scroll to see the backdrop blur effect on the navigation bar.</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
