import { createCommonViteConfig } from '@petersburg-bar/vite-config';

export default createCommonViteConfig({
    port: 1000,
    openBrowser: true,
    federationConfig: {
        name: 'petersburgBar',
        remotes: {
            petersburgBarHomePage: 'http://localhost:1001/assets/remoteEntry.js',
            petersburgBarContactsPage: 'http://localhost:1002/assets/remoteEntry.js',
        },
    },
});
