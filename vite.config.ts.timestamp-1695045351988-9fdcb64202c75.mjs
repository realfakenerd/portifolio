// vite.config.ts
import { sveltekit } from "file:///C:/Users/mensageiro.captacao/Documents/portifolio/node_modules/.pnpm/@sveltejs+kit@1.25.0_svelte@4.2.0_vite@4.4.9/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import lightningCSS from "file:///C:/Users/mensageiro.captacao/Documents/portifolio/node_modules/.pnpm/vite-plugin-lightningcss@0.0.5/node_modules/vite-plugin-lightningcss/dist/index.js";
import removeConsole from "file:///C:/Users/mensageiro.captacao/Documents/portifolio/node_modules/.pnpm/vite-plugin-remove-console@0.0.7/node_modules/vite-plugin-remove-console/dist/index.js";
import viteCompression from "file:///C:/Users/mensageiro.captacao/Documents/portifolio/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@4.4.9/node_modules/vite-plugin-compression/dist/index.mjs";
var config = {
  plugins: [
    sveltekit(),
    lightningCSS({
      browserslist: "> 1%"
    }),
    removeConsole(),
    viteCompression({
      algorithm: "brotliCompress",
      verbose: false,
      threshold: 512,
      compressionOptions: {
        level: 3
      }
    })
  ],
  build: {
    minify: "terser",
    reportCompressedSize: false,
    target: "esnext",
    terserOptions: {
      compress: {
        keep_infinity: true,
        pure_getters: true,
        drop_console: true
      }
    }
  },
  define: {
    "process.env": process.env
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtZW5zYWdlaXJvLmNhcHRhY2FvXFxcXERvY3VtZW50c1xcXFxwb3J0aWZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtZW5zYWdlaXJvLmNhcHRhY2FvXFxcXERvY3VtZW50c1xcXFxwb3J0aWZvbGlvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tZW5zYWdlaXJvLmNhcHRhY2FvL0RvY3VtZW50cy9wb3J0aWZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcclxuaW1wb3J0IGxpZ2h0bmluZ0NTUyBmcm9tICd2aXRlLXBsdWdpbi1saWdodG5pbmdjc3MnO1xyXG4vLyBAdHMtZXhwZWN0LWVycm9yIGNvbXBsYWluaW5nIGFib3V0IG5vdCBoYXZpbmcgYSB0eXBlO1xyXG5pbXBvcnQgcmVtb3ZlQ29uc29sZSBmcm9tICd2aXRlLXBsdWdpbi1yZW1vdmUtY29uc29sZSc7XHJcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xyXG5pbXBvcnQgdHlwZSB7IFVzZXJDb25maWcgfSBmcm9tICd2aXRlJztcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuXHRwbHVnaW5zOiBbXHJcblx0XHRzdmVsdGVraXQoKSxcclxuXHRcdGxpZ2h0bmluZ0NTUyh7XHJcblx0XHRcdGJyb3dzZXJzbGlzdDogJz4gMSUnXHJcblx0XHR9KSxcclxuXHRcdHJlbW92ZUNvbnNvbGUoKSxcclxuXHRcdHZpdGVDb21wcmVzc2lvbih7XHJcblx0XHRcdGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJyxcclxuXHRcdFx0dmVyYm9zZTogZmFsc2UsXHJcblx0XHRcdHRocmVzaG9sZDogNTEyLFxyXG5cdFx0XHRjb21wcmVzc2lvbk9wdGlvbnM6IHtcclxuXHRcdFx0XHRsZXZlbDogM1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdF0sXHJcblx0YnVpbGQ6IHtcclxuXHRcdG1pbmlmeTogJ3RlcnNlcicsXHJcblx0XHRyZXBvcnRDb21wcmVzc2VkU2l6ZTogZmFsc2UsXHJcblx0XHR0YXJnZXQ6ICdlc25leHQnLFxyXG5cdFx0dGVyc2VyT3B0aW9uczoge1xyXG5cdFx0XHRjb21wcmVzczoge1xyXG5cdFx0XHRcdGtlZXBfaW5maW5pdHk6IHRydWUsXHJcblx0XHRcdFx0cHVyZV9nZXR0ZXJzOiB0cnVlLFxyXG5cdFx0XHRcdGRyb3BfY29uc29sZTogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRkZWZpbmU6IHtcclxuXHRcdCdwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52XHJcblx0fVxyXG59IHNhdGlzZmllcyBVc2VyQ29uZmlnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStVLFNBQVMsaUJBQWlCO0FBQ3pXLE9BQU8sa0JBQWtCO0FBRXpCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8scUJBQXFCO0FBRzVCLElBQU0sU0FBUztBQUFBLEVBQ2QsU0FBUztBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLElBQ2QsZ0JBQWdCO0FBQUEsTUFDZixXQUFXO0FBQUEsTUFDWCxTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsTUFDWCxvQkFBb0I7QUFBQSxRQUNuQixPQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLHNCQUFzQjtBQUFBLElBQ3RCLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNkLFVBQVU7QUFBQSxRQUNULGVBQWU7QUFBQSxRQUNmLGNBQWM7QUFBQSxRQUNkLGNBQWM7QUFBQSxNQUNmO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNQLGVBQWUsUUFBUTtBQUFBLEVBQ3hCO0FBQ0Q7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
