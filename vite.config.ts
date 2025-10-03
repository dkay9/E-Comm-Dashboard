import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace '/REPO/' below with your repo name (for example '/ecommerce-dashboard/')
// or set an environment variable and read it here.
export default defineConfig({
	// ...other config...
	base: '/E-Comm-Dashboard/',
	plugins: [react()]
});
