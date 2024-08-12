const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
};

module.exports = {
    context: paths.src,
    entry: {
        app: './index.tsx',
    },
    output: {
        path: paths.dist,
        clean: true,
        globalObject: 'self',
        filename: '[name].[contenthash].js',
        publicPath: 'http://localhost:1000/',
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src'), path.resolve('../../packages/common/src')],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                [
                                    '@babel/preset-react',
                                    {
                                        runtime: 'automatic',
                                    },
                                ],
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/',
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 1000,
        hot: true,
        webSocketServer: 'ws',
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'petersburgBar',
            remotes: {
                petersburgBarHomePage: 'petersburgBarHomePage@http://localhost:1001/remoteEntry.js',
                petersburgBarContactsPage: 'petersburgBarContactsPage@http://localhost:1002/remoteEntry.js',
            },
            shared: {
                ...deps,
                'react': { singleton: true, eager: true, requiredVersion: deps.react },
                'react-dom': {
                    singleton: true,
                    eager: true,
                    requiredVersion: deps['react-dom'],
                },
                'react-router-dom': {
                    singleton: true,
                    eager: true,
                    requiredVersion: deps['react-router-dom'],
                },
            },
        }),
    ].filter(Boolean),
    optimization: {
        usedExports: true,
    },
};
