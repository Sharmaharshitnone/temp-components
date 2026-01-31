import React, { useState } from 'react';
import { Button, Input, Card } from './index';

/**
 * Example usage of the components
 */
export const Example: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Component Library Examples</h1>

      {/* Button Examples */}
      <Card title="Button Component" footer={<small>Different button variants</small>}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => alert('Primary clicked!')}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
            Secondary Button
          </Button>
          <Button variant="danger" onClick={() => alert('Danger clicked!')}>
            Danger Button
          </Button>
          <Button variant="primary" disabled>
            Disabled Button
          </Button>
        </div>
      </Card>

      <div style={{ marginTop: '20px' }}>
        {/* Input Examples */}
        <Card title="Input Component">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
                Text Input
              </label>
              <Input
                value={inputValue}
                onChange={setInputValue}
                placeholder="Type something..."
              />
              <p style={{ marginTop: '5px', fontSize: '12px', color: '#666' }}>
                Value: {inputValue}
              </p>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
                Email Input
              </label>
              <Input
                value=""
                onChange={() => {}}
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
                Password Input
              </label>
              <Input
                value=""
                onChange={() => {}}
                type="password"
                placeholder="Enter password"
              />
            </div>
          </div>
        </Card>
      </div>

      <div style={{ marginTop: '20px' }}>
        {/* Card Examples */}
        <Card
          title="Card with Footer"
          footer={
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <Button variant="secondary" onClick={() => alert('Cancelled')}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => alert('Saved')}>
                Save
              </Button>
            </div>
          }
        >
          <p>This is a card with a title and a footer containing action buttons.</p>
          <p>Cards are great for grouping related content together.</p>
        </Card>
      </div>
    </div>
  );
};
