import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, '.', '');

  // Log to console so you can see it in Vercel build logs
  if (env.API_KEY) {
    console.log("✅ SUCCESS: API_KEY found in environment variables.");
  } else {
    console.warn("⚠️ WARNING: API_KEY not found. Make sure to add it in Vercel Settings > Environment Variables.");
  }

  return {
    base: './', // Ensures relative paths for assets, fixing preview loading issues
    plugins: [react()],
    define: {
      // Polyfill process.env.API_KEY so it works in the client browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});