import React from 'react';
import GlobalNavBar from './components/GlobalNavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalNavBar />
      <main className="main-content">
        <h1>Welcome to the Dashboard</h1>
        <p>This is a demo page to showcase the Global Navigation Bar component.</p>
      </main>
    </div>
  );
}

export default App;
