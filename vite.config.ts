import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, type Plugin } from 'vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

function fastStaticPackPlugin(): Plugin {
  const packFileRegex =
    /(?:static35(?:Dialect|Indic1|Indic2|Global1|Global2|Global3)|valentineWeek(?:Indic1|Indic2|Global1|Global2|Global3))\.ts$/;

  return {
    name: 'fast-static-pack-json',
    enforce: 'pre',
    load(id) {
      const cleanId = id.split('?')[0].replace(/\\/g, '/');
      if (!packFileRegex.test(cleanId)) {
        return null;
      }
      const src = fs.readFileSync(cleanId, 'utf8');
      const match = src.match(/export\s+const\s+([A-Z0-9_]+)\s*:/);
      const start = src.indexOf('{');
      const end = src.lastIndexOf('}');
      if (!match || start === -1 || end === -1 || end <= start) {
        return null;
      }
      const compactJson = JSON.stringify(JSON.parse(src.slice(start, end + 1)));
      return {
        code: `export const ${match[1]} = JSON.parse(${JSON.stringify(compactJson)});\n`,
        map: null,
      };
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [fastStaticPackPlugin(), react(), tailwindcss()],
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
        '@vercel/analytics/react',
        'lucide-react',
        'firebase/app',
        'firebase/auth',
        'firebase/firestore',
        'firebase/storage',
        'bad-words',
      ],
    },
    build: {
      sourcemap: false,
      reportCompressedSize: false,
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
