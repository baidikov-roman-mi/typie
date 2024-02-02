import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "./src/")}`,
      "@hooks": `${path.resolve(__dirname, "./src/hooks/")}`,
      "@styling": `${path.resolve(__dirname, "./src/styling/")}`,
      "@fonts": `${path.resolve(__dirname, "./src/styling/fonts/static/")}`,
      "@icon": `${path.resolve(__dirname, "./public/icons/")}`,
      "@mainPageComponent": `${path.resolve(__dirname, "./src/components/main-page/")}`
    }
  }
})
