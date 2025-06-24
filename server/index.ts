import { createServer } from 'vite';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Create Vite server in dev mode
    const vite = await createServer({
      server: { 
        middlewareMode: false,
        port: PORT,
        host: '0.0.0.0',
        allowedHosts: [
          '..dev',
          '.repl.co',
          'localhost',
          '127.0.0.1'
        ]
      },
      root: path.join(__dirname, '../client'),
      configFile: path.join(__dirname, '../vite.config.ts')
    });

    // Add API routes to Vite's internal connect server
    vite.middlewares.use('/api/contact', express.json(), (req, res, next) => {
      if (req.method === 'POST') {
        console.log('Contact form submission:', req.body);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: true, message: 'Message received' }));
      } else {
        next();
      }
    });

    await vite.listen();
    console.log(`Development server running on http://0.0.0.0:${PORT}`);
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

startServer();