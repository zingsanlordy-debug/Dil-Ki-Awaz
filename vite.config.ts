import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    optimizeDeps: {
      entries: ['index.html'],
      holdUntilCrawlEnd: false,
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'lucide-react',
        'firebase/app',
        'firebase/auth',
        'firebase/firestore',
        'firebase/storage',
        'bad-words',
      ],
    },
    build: {
      chunkSizeWarningLimit: 2500,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
        output: {
          manualChunks(id) {
            if (id.includes('@tensorflow') || id.includes('nsfwjs')) {
              return 'tf-moderation';
            }
            if (id.includes('node_modules/firebase') || id.includes('node_modules/@firebase')) {
              return 'firebase-vendor';
            }
            if (id.includes('/src/data/religious/')) {
              return 'data-religious';
            }
            if (id.includes('/src/data/familyRituals/')) {
              return 'data-family-rituals';
            }
            if (id.includes('/src/data/categories/festival')) {
              return 'data-festivals';
            }
            if (
              id.includes('/src/data/categories/feelings') ||
              id.includes('/src/data/maafi/')
            ) {
              return 'data-feelings';
            }
            if (
              id.includes('/src/zq-mansoon-special/data/january') ||
              id.includes('/src/zq-mansoon-special/data/february') ||
              id.includes('/src/zq-mansoon-special/data/march')
            ) {
              return 'data-months-q1';
            }
            if (
              id.includes('/src/zq-mansoon-special/data/april') ||
              id.includes('/src/zq-mansoon-special/data/may') ||
              id.includes('/src/zq-mansoon-special/data/june')
            ) {
              return 'data-months-q2';
            }
            if (
              id.includes('/src/zq-mansoon-special/data/july') ||
              id.includes('/src/zq-mansoon-special/data/august') ||
              id.includes('/src/zq-mansoon-special/data/september')
            ) {
              return 'data-months-q3';
            }
            if (
              id.includes('/src/zq-mansoon-special/data/october') ||
              id.includes('/src/zq-mansoon-special/data/november') ||
              id.includes('/src/zq-mansoon-special/data/december')
            ) {
              return 'data-months-q4';
            }
            if (id.includes('/src/zq-mansoon-special/')) {
              return 'data-months';
            }
            if (id.includes('/src/data/valentineWeekIndic1')) {
              return 'data-vw-indic1';
            }
            if (id.includes('/src/data/valentineWeekIndic2')) {
              return 'data-vw-indic2';
            }
            if (id.includes('/src/data/valentineWeekGlobal1')) {
              return 'data-vw-global1';
            }
            if (id.includes('/src/data/valentineWeekGlobal2')) {
              return 'data-vw-global2';
            }
            if (id.includes('/src/data/valentineWeekGlobal3')) {
              return 'data-vw-global3';
            }
            if (
              id.includes('/src/data/valentineWeekBase') ||
              id.includes('/src/data/valentineWeekMeta')
            ) {
              return 'data-vw-base';
            }
          },
        },
      },
    },
    server: {
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    preview: {
      host: '0.0.0.0',
      allowedHosts: true as const,
    },
  };
});
