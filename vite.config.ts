import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import "dotenv/config";

const BASE_URL = process.env.BASE_URL || "/pesta-ilmiah/";
console.log(BASE_URL);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: BASE_URL.toString(),
});
