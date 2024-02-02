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
      "@routes": `${path.resolve(__dirname, "./src/routes/")}`,
      "@mainPage": `${path.resolve(__dirname, "./src/components/main-page/")}`,
      "@aboutPage": `${path.resolve(__dirname, "./src/components/about-page/")}`,
      "@testPage": `${path.resolve(__dirname, "./src/components/test-page/")}`,
      "@lessonsPage": `${path.resolve(__dirname, "./src/components/lessons-page/")}`,
      "@leadersPage": `${path.resolve(__dirname, "./src/components/leaders-page/")}`,
      "@settingsPage": `${path.resolve(__dirname, "./src/components/settings-page/")}`,
      "@loginPage": `${path.resolve(__dirname, "./src/components/login-page/")}`,
    }
  }
})
