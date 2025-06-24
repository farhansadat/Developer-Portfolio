# Deployment Guide

## GitHub Repository Setup

1. **Initialize Git Repository** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

2. **Add Remote Repository**:
```bash
git remote add origin https://github.com/farhansadat/Developer-Portfolio.git
git branch -M main
git push -u origin main
```

## Netlify Deployment Steps

### Option 1: Connect GitHub Repository

1. **Login to Netlify**: Go to [netlify.com](https://netlify.com) and sign in
2. **New Site from Git**: Click "New site from Git"
3. **Choose Git Provider**: Select GitHub
4. **Select Repository**: Choose `farhansadat/Developer-Portfolio`
5. **Build Settings**:
   - Build command: `vite build --config vite.config.netlify.ts`
   - Publish directory: `dist/public`
   - Node version: `20`

### Option 2: Manual Deploy

1. **Build the Project**:
```bash
vite build --config vite.config.netlify.ts
```

2. **Upload dist/public folder** to Netlify manually

## Build Configuration

The project uses `vite.config.netlify.ts` for production builds with:
- Optimized assets
- Proper routing setup
- Environment-specific configurations

## Environment Variables (if needed)

Set these in Netlify dashboard under Site settings > Environment variables:
- `VITE_GITHUB_USERNAME`: Your GitHub username (if different from config)
- Any API keys for contact form services

## Domain Setup

1. **Custom Domain**: In Netlify dashboard, go to Site settings > Domain management
2. **DNS Configuration**: Update your domain's DNS to point to Netlify
3. **SSL Certificate**: Automatically provided by Netlify

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] GitHub projects display properly
- [ ] Contact form works (if configured)
- [ ] Dark/light mode toggle functions
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags present