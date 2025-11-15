import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 🔧 DOMAIN CHANGE LOCATION #2: Update base path configuration here
  // ────────────────────────────────────────────────────────────────
  // CURRENT (GitHub Pages): base: \"/dev1x\"
  // CHANGE TO (Custom domain): base: \"/\"
  // 
  // Why: This tells Vite where the app will be served from
  // - \"/dev1x\" = subdirectory on GitHub Pages
  // - \"/\" = root of custom domain (dev1x.lovestoblog.com)
  // 
  // After changing this value, run: npm run build
  base: "/dev1x",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
