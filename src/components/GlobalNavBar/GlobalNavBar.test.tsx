import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GlobalNavBar from './GlobalNavBar';

describe('GlobalNavBar', () => {
  it('renders the SYSTEM logo', () => {
    render(<GlobalNavBar />);
    expect(screen.getByText('SYSTEM')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<GlobalNavBar />);
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Deployments')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
  });

  it('renders the Feedback button', () => {
    render(<GlobalNavBar />);
    expect(screen.getByText('Feedback')).toBeInTheDocument();
  });

  it('calls onFeedbackClick when Feedback button is clicked', () => {
    const mockOnFeedbackClick = jest.fn();
    render(<GlobalNavBar onFeedbackClick={mockOnFeedbackClick} />);
    
    fireEvent.click(screen.getByText('Feedback'));
    
    expect(mockOnFeedbackClick).toHaveBeenCalledTimes(1);
  });

  it('calls onNavLinkClick with correct link when navigation link is clicked', () => {
    const mockOnNavLinkClick = jest.fn();
    render(<GlobalNavBar onNavLinkClick={mockOnNavLinkClick} />);
    
    fireEvent.click(screen.getByText('Overview'));
    expect(mockOnNavLinkClick).toHaveBeenCalledWith('Overview');

    fireEvent.click(screen.getByText('Deployments'));
    expect(mockOnNavLinkClick).toHaveBeenCalledWith('Deployments');

    fireEvent.click(screen.getByText('Analytics'));
    expect(mockOnNavLinkClick).toHaveBeenCalledWith('Analytics');
  });

  it('has proper accessibility attributes', () => {
    render(<GlobalNavBar />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Global navigation');
  });
});
