const eslintRules = require('./src/configs/eslint/eslint');
const importRules = require('./src/configs/eslint/import');
const typescriptRules = require('./src/configs/eslint/typescript');
const reactRules = require('./src/configs/eslint/react');

module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        es2017: true,
        es2021: true,
        node: true,
        jest: true,
    },

    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        sourceType: 'module',
    },

    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
            typescript: true,
        },
        'react': {
            version: 'detect',
        },
    },

    globals: {
        JSX: 'readonly',
    },

    plugins: ['import', 'react', 'react-hooks', '@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
    ],

    rules: {
        ...eslintRules,
        ...importRules,
        ...typescriptRules,
        ...reactRules,
    },
    ignorePatterns: ['.eslintrc.js', 'webpack.config.js', 'node_modules/**/*'],
};
