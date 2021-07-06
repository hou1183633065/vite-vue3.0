const projectPackage = require('./package.json')
const path = require('path')
const { resolve } = path
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
export default {
    hostname: '127.0.0.1',
    port: 8080,
    open: false,
    https: false,
    ssr: false,
    base: `/${projectPackage.name}/`,
    outDir: projectPackage.name,
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                public: resolve(__dirname, 'public/index.html')
            }
        }
    },
    alias: {
        '/assets/': path.resolve(__dirname, './src/assets'),
        '/views/': path.resolve(__dirname, './src/views'),
        '/utils/': path.resolve(__dirname, './src/utils'),
        '/components/': path.resolve(__dirname, './src/components'),
    },
    plugins: [
        new MonacoWebpackPlugin()
    ]
}