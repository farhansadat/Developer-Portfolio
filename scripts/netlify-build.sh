#!/bin/bash

echo "🚀 Starting Netlify build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build for Netlify
echo "🔨 Building application..."
npm run build:netlify

echo "✅ Netlify build completed!"
echo "📁 Build output available in: dist/public"