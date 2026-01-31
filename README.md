# temp-components

A React component library with reusable UI components.

## Components

This library includes the following components:

### Button
A customizable button component with multiple variants.

```tsx
import { Button } from 'temp-components';

<Button variant="primary" onClick={() => console.log('clicked')}>
  Click me
</Button>
```

Props:
- `children`: React.ReactNode - Button content
- `onClick`: () => void - Click handler
- `variant`: 'primary' | 'secondary' | 'danger' - Button style variant
- `disabled`: boolean - Disable the button

### Input
A controlled input component with various types.

```tsx
import { Input } from 'temp-components';

<Input 
  value={value} 
  onChange={setValue}
  placeholder="Enter text"
  type="text"
/>
```

Props:
- `value`: string - Input value
- `onChange`: (value: string) => void - Change handler
- `placeholder`: string - Placeholder text
- `type`: 'text' | 'password' | 'email' | 'number' - Input type
- `disabled`: boolean - Disable the input

### Card
A container component for content with optional title and footer.

```tsx
import { Card } from 'temp-components';

<Card 
  title="Card Title"
  footer={<button>Action</button>}
>
  Card content goes here
</Card>
```

Props:
- `title`: string - Optional card title
- `children`: React.ReactNode - Card content
- `footer`: React.ReactNode - Optional footer content

## Installation

```bash
npm install temp-components
```

## Usage

```tsx
import { Button, Input, Card } from 'temp-components';

function App() {
  return (
    <div>
      <Card title="Example">
        <Input value="" onChange={() => {}} placeholder="Type something" />
        <Button variant="primary">Submit</Button>
      </Card>
    </div>
  );
}
```

## Development

Install dependencies:
```bash
npm install
```

Build the library:
```bash
npm run build
```
