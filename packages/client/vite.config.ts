import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { config } from "dotenv";
config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [react(), tsconfigPaths(), TanStackRouterVite()],
    server: {
        hmr: true,
        proxy: {
            "/api": {
                target:
                    mode === "production"
                        ? process.env.VITE_API_URL
                        : "http://localhost:3000/",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
}));
