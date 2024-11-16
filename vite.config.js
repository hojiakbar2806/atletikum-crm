import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { resolve } from "path"; // path modulini import qilish
import svgr from "vite-plugin-svgr"; // SVG pluginni import qilish

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
  publicDir: "public",

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  build: {
    target: "es2015",
    minify: "terser",
    sourcemap: false,
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
