import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: "local", // Ensure CSS modules are scoped locally by default
    },
  },
});
