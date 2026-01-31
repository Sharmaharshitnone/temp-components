# Global Navigation Bar Component

A minimalist, airy global navigation bar component built with React and TypeScript.

![Global Navigation Bar Demo](https://github.com/user-attachments/assets/ce4e93bf-92e5-490d-b071-9091ec11829a)

## Features

- **Full width, fixed height (64px)** - Consistent across all viewport sizes
- **Translucent background** - Black (#000000) with backdrop blur (12px)
- **Border-bottom** - Subtle 1px solid #333 separator
- **Inter font** - Bold for logo, Regular for links
- **Responsive layout** - Logo left, links centered, Feedback button right

## Component Structure

```
src/
└── components/
    └── GlobalNavBar/
        ├── GlobalNavBar.tsx     # Main component
        ├── GlobalNavBar.css     # Styles
        ├── GlobalNavBar.test.tsx # Tests
        └── index.ts             # Exports
```

## Usage

```tsx
import GlobalNavBar from './components/GlobalNavBar';

function App() {
  return (
    <GlobalNavBar 
      onFeedbackClick={() => console.log('Feedback clicked')}
      onNavLinkClick={(link) => console.log(`Navigated to ${link}`)}
    />
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `onFeedbackClick` | `() => void` | Optional callback when Feedback button is clicked |
| `onNavLinkClick` | `(link: string) => void` | Optional callback when a navigation link is clicked |

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Design Specifications

- **Height**: 64px fixed
- **Background**: rgba(0, 0, 0, 0.8) with backdrop-filter: blur(12px)
- **Border**: 1px solid #333
- **Logo font**: Inter Bold, 18px, white
- **Navigation links**: Inter Regular, 14px, #888888 (hover: white)
- **Feedback button**: Inter Regular, 14px, white with subtle border
