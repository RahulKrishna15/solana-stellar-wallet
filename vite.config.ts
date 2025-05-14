import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  optimizeDeps: {
    include: ['stream'], // add what Metaplex needs
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      stream: 'stream-browserify', // Alias stream to stream-browserify
    },
  },
  define: {
    "process.env": {},
    "process.platform": '"browser"',
    "process.version": '"v16.0.0"',
    global: "globalThis", // Add this line to fix the UMI bundle error
  },
}));
