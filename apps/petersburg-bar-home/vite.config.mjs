import { createCommonViteConfig } from '@petersburg-bar/vite-config';

export default createCommonViteConfig({
    port: 1001,
    openBrowser: false,
    federationConfig: {
        name: 'petersburgBarHomePage',
        exposes: {
            './App': './src/app.tsx',
        },
    },
});
