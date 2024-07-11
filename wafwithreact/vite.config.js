import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // you can set the port here
    open: true, // automatically open the app in the browser
    cors: true, // enable CORS
  },
  build: {
    outDir: "dist", // output directory for build
    sourcemap: true, // generate source maps for easier debugging
  },
  resolve: {
    alias: {
      "@": "/src", // you can create aliases for easier imports
    },
  },
});
