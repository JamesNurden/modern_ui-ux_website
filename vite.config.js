import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Adjust this if needed based on your deployment. '/' is typically fine for most deployments.
  root: './', // This should point to the root directory of your project. Usually, it's the directory where your `index.html` file is located.
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html', // This is correct as long as `index.html` is in the root of your project.
    },
    outDir: 'dist', // This is the default output directory for Vite. It's fine to keep it as is.
  },
  esbuild: {
    jsxFactory: "React.createElement", // This is fine for React 17 and earlier. For React 18, you might not need this.
  },
  resolve: {
    alias: {
      '@': '/src', // This alias resolves '@' to the 'src' directory. Ensure that this aligns with your directory structure.
    },
  },
});
