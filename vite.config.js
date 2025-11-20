import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: process.cwd(),
  build: {
    outDir: "build",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(process.cwd(), "index.html")
    }
  },
  server: {
    port: 3000
  }
});
