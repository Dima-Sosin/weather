import path from "path"
import { defineConfig } from "vite"

import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@api": path.resolve(__dirname, "./src/api"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@helpers": path.resolve(__dirname, "./src/helpers")
        }
    }
})
