import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-database-json',
      configureServer(server) {
        server.middlewares.use('/database.json', (_req, res) => {
          const file = readFileSync(resolve(__dirname, 'src/database.json'), 'utf-8');
          res.setHeader('Content-Type', 'application/json');
          res.end(file);
        });
      },
      generateBundle() {
        const content = readFileSync(resolve(__dirname, 'src/database.json'), 'utf-8');
        this.emitFile({ type: 'asset', fileName: 'database.json', source: content });
      },
    },
  ],
  resolve: {
    tsconfigPaths: true,
  },
})
