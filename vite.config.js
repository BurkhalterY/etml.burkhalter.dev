import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "etml.burkhalter.dev",
        short_name: "ETML",
        start_url: "/mtu2e/agenda/today",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#004595",
        icons: [
          {
            src: "images/icons/etml16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "images/icons/etml32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "images/icons/etml64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "images/icons/etml128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "images/icons/etml256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "images/icons/etml512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
