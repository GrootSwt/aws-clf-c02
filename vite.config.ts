import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/aws-clf-c02/",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith("custom-");
          }
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
