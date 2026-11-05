import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ command, isPreview }) => ({
  plugins: [vue()],
  base: command === "serve" && !isPreview ? "/" : "/RaVF/",
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  server: { host: "0.0.0.0", port: 5173, strictPort: false },
  preview: { host: "0.0.0.0", port: 4173, strictPort: true },
  build: { chunkSizeWarningLimit: 650 },
}));
