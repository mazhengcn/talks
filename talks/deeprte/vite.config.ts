import { defineConfig } from "vite";

export default defineConfig({
  server: {
    fs: {
      strict: false,
    },
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      onLog(level, log) {
        // Suppress Rolldown INVALID_ANNOTATION warnings from @vueuse/core
        if (log.code === "INVALID_ANNOTATION") return;
      },
    },
  },
});
