/** @type {import("eslint").Linter.Config} */
module.exports = {
    ...require('@petersburg-bar/eslint-config'),
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
};
