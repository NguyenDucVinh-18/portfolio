import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dns from 'dns'
import tsConfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/server-options.html#server-options
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  server: {
    port: 3000,
  },
})

