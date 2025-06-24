# Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dynamic GitHub integration, dark/light mode, and smooth animations.

## Features

- **Modern Design**: Clean, professional interface with glass morphism effects
- **GitHub Integration**: Automatically fetches and displays your repositories
- **Responsive**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Smooth Animations**: Framer Motion powered transitions
- **Contact Form**: Functional contact form with email integration
- **SEO Optimized**: Meta tags and structured data

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI components
- **Animations**: Framer Motion
- **Data Fetching**: React Query
- **Routing**: Wouter
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/farhansadat/Developer-Portfolio.git
cd Developer-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser.

## Configuration

### GitHub Integration

Update the GitHub configuration in `client/src/config/github.ts`:

```typescript
export const GITHUB_CONFIG = {
  username: 'your-github-username',
  excludeRepos: ['repo-to-exclude'],
  featuredRepos: ['featured-repo-name'],
};
```

### Personal Information

Update your personal information in the following files:
- `client/src/data/skills.ts` - Skills, certifications, and experience
- `client/src/components/Hero.tsx` - Hero section content
- `client/src/components/About.tsx` - About section content

## Deployment

### Netlify

1. Build the project:
```bash
npm run build:netlify
```

2. Deploy to Netlify:
   - Connect your GitHub repository
   - Set build command: `npm run build:netlify`
   - Set publish directory: `dist/public`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/public` folder to your hosting provider.

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── data/          # Static data files
│   │   ├── lib/           # Utility functions
│   │   └── types/         # TypeScript type definitions
├── server/                # Development server
├── attached_assets/       # Project assets
└── dist/                 # Build output
```

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contact

Alimullah Sadat - [GitHub](https://github.com/farhansadat)