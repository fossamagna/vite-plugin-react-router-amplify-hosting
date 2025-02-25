import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { isBuiltin } from "node:module";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: 'index',
    },
    rollupOptions: {
      external: (id) => isBuiltin(id),
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
