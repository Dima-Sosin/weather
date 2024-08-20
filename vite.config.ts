import path from "path"
import { defineConfig } from "vite"

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [TanStackRouterVite(), react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@api": path.resolve(__dirname, "./src/api"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@helpers": path.resolve(__dirname, "./src/helpers"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@store": path.resolve(__dirname, "./src/store"),
        }
    }
})
