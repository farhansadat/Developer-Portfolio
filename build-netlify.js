#!/usr/bin/env node

import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildForNetlify() {
  try {
    console.log('Building for Netlify deployment...');
    
    await build({
      configFile: path.resolve(__dirname, 'vite.config.netlify.ts'),
      mode: 'production'
    });
    
    console.log('✅ Build completed successfully for Netlify!');
    console.log('📁 Build output: dist/public');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildForNetlify();