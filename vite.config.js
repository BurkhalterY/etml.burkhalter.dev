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
            src: "img/etml-e.svg",
            sizes: "any",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
