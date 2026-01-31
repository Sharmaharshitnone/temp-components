import React from 'react';

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children, footer }) => {
  const cardStyles = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const titleStyles = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#333',
  };

  const footerStyles = {
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: '1px solid #eee',
  };

  return (
    <div style={cardStyles}>
      {title && <div style={titleStyles}>{title}</div>}
      <div>{children}</div>
      {footer && <div style={footerStyles}>{footer}</div>}
    </div>
  );
};
