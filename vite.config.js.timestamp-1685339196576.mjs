// vite.config.js
import react from "file:///C:/Users/mania/OneDrive/Desktop/MERN/NFC/NFC-student-portal-frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/mania/OneDrive/Desktop/MERN/NFC/NFC-student-portal-frontend/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  esbuild: {
    loader: "jsx"
  },
  root: "./",
  build: {
    outDir: "./build"
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".ts": "tsx"
      }
    }
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtYW5pYVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXE1FUk5cXFxcTkZDXFxcXE5GQy1zdHVkZW50LXBvcnRhbC1mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbWFuaWFcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxNRVJOXFxcXE5GQ1xcXFxORkMtc3R1ZGVudC1wb3J0YWwtZnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL21hbmlhL09uZURyaXZlL0Rlc2t0b3AvTUVSTi9ORkMvTkZDLXN0dWRlbnQtcG9ydGFsLWZyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBlc2J1aWxkOiB7XHJcbiAgICBsb2FkZXI6ICdqc3gnLFxyXG4gIH0sXHJcbiAgcm9vdDogJy4vJyxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiAnLi9idWlsZCcsXHJcbiAgfSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGVzYnVpbGRPcHRpb25zOiB7XHJcbiAgICAgIGxvYWRlcjoge1xyXG4gICAgICAgICcuanMnOiAnanN4JyxcclxuICAgICAgICAnLnRzJzogJ3RzeCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3JlYWN0KCldLFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThZLE9BQU8sV0FBVztBQUNoYSxTQUFTLG9CQUFvQjtBQUc3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUNuQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
