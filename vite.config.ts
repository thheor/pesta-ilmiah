import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import "dotenv/config";

export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: command === "serve" ? "/" : "/pesta-ilmiah/",
  };
});
