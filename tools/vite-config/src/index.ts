import path from 'path';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import {UserConfig, defineConfig} from 'vite';

export interface FederationConfig {
    name: string;
    remotes?: Record<string, string>;
    exposes?: Record<string, string>;
}

export interface CommonViteConfigOptions {
    port: number;
    federationConfig: FederationConfig;
    openBrowser?: boolean;
}

export const createCommonViteConfig = (options: CommonViteConfigOptions): UserConfig => {
    const {port, federationConfig, openBrowser = false} = options;

    return defineConfig({
        server: {
            port,
            strictPort: true,
            open: openBrowser
        },
        preview: {
            port,
            strictPort: true,
            open: openBrowser
        },
        build: {
            target: 'esnext',
            outDir: 'dist',
            assetsDir: 'assets',
            rollupOptions: {
                input: path.resolve(process.cwd(), 'index.html'),
                output: {
                    entryFileNames: '[name].[hash].js',
                    chunkFileNames: '[name].[hash].js',
                    assetFileNames: 'assets/[name].[hash][extname]',
                },
            },
        },
        plugins: [
            react(),
            federation({
                name: federationConfig.name,
                filename: 'remoteEntry.js',
                ...(federationConfig.remotes && {remotes: federationConfig.remotes}),
                ...(federationConfig.exposes && {exposes: federationConfig.exposes}),
                shared: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'zustand'],
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(process.cwd(), './src'),
            },
        },
        css: {
            modules: {
                localsConvention: 'camelCase',
            },
        },
        optimizeDeps: {
            include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'zustand'],
        },
    });
}; 