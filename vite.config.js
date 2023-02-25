// Utilities
import {defineConfig} from 'vite'
import { fileURLToPath, URL } from 'node:url'

// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuetify({
            autoImport: true,
        }),
    ],
    define: {'process.env': {}},
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    server: {
        port: 3000,
    },
})
