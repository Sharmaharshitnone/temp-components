import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Global Navigation Bar Demo heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Global Navigation Bar Demo/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders GlobalNavBar component', () => {
  render(<App />);
  const logoElement = screen.getByText(/SYSTEM/i);
  expect(logoElement).toBeInTheDocument();
});
