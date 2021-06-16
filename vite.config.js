const path = require('path')
export default {
    hostname: '127.0.0.1',
    port: 8080,
    open: false,
    https: false,
    ssr: false,
    base: '/app/',
    outDir: 'webroot',

    alias: {
        '/assets/': path.resolve(__dirname, './src/assets'),
        '/views/': path.resolve(__dirname, './src/views'),
        '/utils/': path.resolve(__dirname, './src/utils'),
        '/components/': path.resolve(__dirname, './src/components'),
    },
}