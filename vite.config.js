import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, "public"),
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, "build"),
    sourcemap: false,
    rollupOptions: {
      input: resolve(__dirname, "public", "index.html")
    }
  }
});

