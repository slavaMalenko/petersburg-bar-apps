import { createCommonViteConfig } from '@petersburg-bar/vite-config';

export default createCommonViteConfig({
    port: 1002,
    openBrowser: false,
    federationConfig: {
        name: 'petersburgBarContactsPage',
        exposes: {
            './App': './src/app.tsx',
        },
    },
});
