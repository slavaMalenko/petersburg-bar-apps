const eslintRules = require("./configs/eslint");
const typescriptRules = require("./configs/typescript");
const reactRules = require("./configs/react");
const importRules = require("./configs/import");

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

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: "module",
  },

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["apps/*/tsconfig.json"],
      },
    },
  },

  globals: {
    JSX: "readonly",
  },

  plugins: ["import", "react", "react-hooks", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],

  rules: {
    ...eslintRules,
    ...typescriptRules,
    ...reactRules,
    ...importRules,
  },
  ignorePatterns: [
    "src/configs/eslint/**/*",
    ".eslintrc.js",
    "webpack.config.js",
    "node_modules/**/*",
    "build/**/*",
  ],
};
